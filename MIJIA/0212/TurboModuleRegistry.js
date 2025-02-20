/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @flow strict
 * @format
 */

import type {TurboModule} from './RCTExport';

import invariant from 'invariant';

const NativeModules = require('../BatchedBridge/NativeModules');

const turboModuleProxy = global.__turboModuleProxy;

const isNonEmptyObject = (obj) =>
  obj !== null &&
  typeof obj === "object" &&
  Object.keys(obj).length >0;
function requireModule<T: TurboModule>(name: string): ?T {
  // Bridgeless mode requires TurboModules
  if (global.RN$Bridgeless !== true) {
    // Backward compatibility layer during migration.
    const legacyModule = NativeModules[name];
    if (legacyModule != null) {
      return ((legacyModule: $FlowFixMe): T);
    }
  }

  if (turboModuleProxy != null) {
    const module: ?T = turboModuleProxy(name);
    if (isNonEmptyObject(module)) {
      const keys = Reflect.ownKeys(module);
      const newObj = {};
      keys.forEach(key => newObj[key] = module[key])
      // console.log('newObj:', newObj)
      return newObj;
    }
    console.log('module:', module)
    return module;
  }

  return null;
}

export function get<T: TurboModule>(name: string): ?T {
  return requireModule<T>(name);
}

export function getEnforcing<T: TurboModule>(name: string): T {
  const module = requireModule<T>(name);
  invariant(
    module != null,
    `TurboModuleRegistry.getEnforcing(...): '${name}' could not be found. ` +
      'Verify that a module by this name is registered in the native binary.',
  );
  return module;
}
