import { SafeAreaView, ScrollView, Alert, View, Text, Button, StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';
const App: () => React$Node = () => {
    const [isShow, setIsShow] = useState(true);

    return (
        <>
  
            {isShow && <TextA />}
            {!isShow && <TextB />}
            <Button
                title='TEST'
                onPress={() => {
                    setIsShow(!isShow)
                }}
            />
        </>
    )
}
export default App;

const TextA: () => React$Node = () => {
    return (
        <>
            <Text># h1 Heading 8-</Text>
            <Text>## h2 Heading</Text>
            <Text> ### h3 Heading</Text>
            <Text> ...by using additional greater-than signs right next to each other...</Text>
            <Text> + Create a list by starting a line with \`+\`, \`-\`, or \`*\`</Text>
            <Text>+ Facilisis in pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>2. Consectetur adipiscing elit. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>| data   | path to data files to supply the data that will be passed into templates. |</Text>
            <Text>![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")</Text>
            <Text>Enable typographer option to see result.</Text>
            <Text>+ Facilisis in pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>2. Consectetur adipiscing elit. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>| data   | path to data files to supply the data that will be passed into templates. |</Text>
            <Text>![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")</Text>
            <Text>Enable typographer option to see result.</Text>
            <Text>+ Facilisis in pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>2. Consectetur adipiscing elit. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>| data   | path to data files to supply the data that will be passed into templates. |</Text>
            <Text>![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")</Text>
            <Text>Enable typographer option to see result.</Text>
        </>
    )
}

const TextB: () => React$Node = () => {
    return (
        <>
            <Text># h1 Heading 8- 2</Text>
            <Text>## h2 Heading 4</Text>
            <Text> ### h3 Heading 7</Text>
            <Text> ...by using additional greater- 3 than signs right next to each other...</Text>
            <Text> + Create a list E by starting a line with \`+\`, \`-\`, or \`*\`</Text>
            <Text>+ Facilisis in pretiD um nisl aliquet. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>2. Consectetur adi D piscing elit. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>| data   | path to  D data files to supply the data that will be passed into templates. |</Text>
            <Text>![Stormtroopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")</Text>
            <Text>Enable typographer D option to see result.</Text>
            <Text>+ Facilisis in S pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>2. Consectetur aS dipiscing elit. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>| data S   | path to data files to supply the data that will be passed into templates. |</Text>
            <Text>![Stormtroo pocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")</Text>
            <Text>Enable typoD grapher option to see result.</Text>
            <Text>+ Facilisis F in pretium nisl aliquet. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>2. Cons D ectetur adipiscing elit. This is a very long list item that will surely wrap onto the next line.</Text>
            <Text>| data A  | path to data files to supply the data that will be passed into templates. |</Text>
            <Text>![StormtW roopocat](https://octodex.github.com/images/stormtroopocat.jpg "The Stormtroopocat")</Text>
            <Text>Enable typoE grapher option to see result.</Text>
        </>
    )
}