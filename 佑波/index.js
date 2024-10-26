import React, {useEffect, useState} from 'react';
import {View, AppRegistry, Text, StyleSheet} from 'react-native';

import {CalendarList} from 'react-native-calendars';
// import Reaminated from 'react-native-reanimated';
import AnimatedTest from './animatedtest';

class Day extends React.Component {
  state = {
    render: false,
  };

  componentDidMount() {
    setTimeout(() => {
      this.setState({render: true});
    }, 10);
  }

  render() {
    if (!this.state.render) return null;
    return (
      <View>
        <Text>1</Text>
      </View>
    );
  }
}

const App = () => {
  const noew = new Date();
  const [AnimatedTime, setTime] = useState(0);

  useEffect(() => {
    requestAnimationFrame(d => {
      setTime(d - noew);
    });
  }, []);

  return (
    <View style={{padding: 32}}>
      {/* <Animated.View /> */}
      <Text>消耗时间：{AnimatedTime}ms</Text>

      <CalendarList
        // current={this.state.current}

        monthFormat={'yyyy MM'}
        hideArrows={true}
        hideExtraDays={false}
        removeClippedSubviews={true}
        // Do not show days of other months in month page. Default = false
        //   hideExtraDays={true}
        // If hideArrows=false and hideExtraDays=false do not switch month when tapping on greyed out
        // day from another month that is visible in calendar page. Default = false
        disableMonthChange={true}
        // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday.
        // firstDay={this.state.firstDay}
        // Hide day names. Default = false
        //   hideDayNames={true}
        // Show week numbers to the left. Default = false
        showWeekNumbers={false}
        // Handler which gets executed when press arrow icon left. It receive a callback can go back month

        pastScrollRange={50}
        // Max amount of months allowed to scroll to the future. Default = 50
        futureScrollRange={50}
        // Enable or disable scrolling of calendar list
        scrollEnabled={true}
        // Enable horizontal scrolling, default = false
        horizontal={true}
        // Enable paging on horizontal, default = false
        pagingEnabled={true}
        // Set custom calendarWidth.
        calendarWidth={440}
        calendarHeight={260}
        style={{
          backgroundColor: 'white',
        }}
        theme={{
          calendarBackground: 'white',
          textSectionTitleColor: 'black',
          dayTextColor: 'red',
          todayTextColor: 'black',
          selectedDayTextColor: 'black',
          monthTextColor: 'black',
          indicatorColor: 'black',
          selectedDayBackgroundColor: '#333248',
          arrowColor: 'black',
          'stylesheet.calendar-list.main': {
            calendar: {
              padding: 0,
            },
          },
          'stylesheet.calendar.main': {
            week: {
              marginTop: 1,
              marginBottom: 1,
              flexDirection: 'row',
              justifyContent: 'space-around',
            },
          },
          // textDisabledColor: 'red',
          'stylesheet.calendar.header': {
            header: {
              margin: 0,
            },
            monthText: {
              fontWeight: '500',
              fontSize: 16,
              color: 'black',
              opacity: 0,
              padding: 0,
            },
            week: {
              flexDirection: 'row',
              justifyContent: 'space-around',
              marginBottom: 8,
              borderBottomColor: 'grey',
              borderBottomWidth: StyleSheet.hairlineWidth,
              paddingBottom: 8,
            },
            dayHeader: {
              textAlign: 'left',
              color: 'grey',
              fontSize: 12,
              fontWeight: '500',
            },
            // arrow: {
            //   position: 'absolute',
            //   bottom: 0
            // }
          },
        }}
        // markedDates={this.state.marks}
        dayComponent={Day}
      />
      <AnimatedTest />
    </View>
  );
};

AppRegistry.registerComponent('HomePage', () => App);
