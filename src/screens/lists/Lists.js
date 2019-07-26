import React, { Component, Fragment } from 'react';
import {
  SafeAreaView,
  ScrollView,
  View,
  Text,
  StatusBar,
  Animated
} from 'react-native';

import {
  Icon
} from 'react-native-elements';
import Table from 'react-native-simple-table';

import appStyles from './../../configs/appStyles';
import metrics from './../../configs/metrics';
import styles from './listsStyles';

const widthRow = metrics.screenWidth / 2

class Lists extends Component {

  constructor(props) {
    super(props)

    this.state = {
      scrollX: new Animated.Value(0)
    }
    this.columns = []
    this.data = []
  }

  render() {

    for (let i = 1; i <= 5; i++) {
      this.columns.push({
        id: i,
        title: `Head ${i}`
      });
    }

    for (let i = 1; i <= 5; i++) {
      this.data.push({
        id: i,
        title: `Value ${i}`
      });
    }

    const fieldWidth = this.state.scrollX.interpolate({
      inputRange: [0, metrics.screenWidth / 2 - 100],
      outputRange: [metrics.screenWidth / 2, 100],
      extrapolate: 'clamp',
    });

    const fieldHide = this.state.scrollX.interpolate({
      inputRange: [0, (metrics.screenWidth / 2 - 100) / 2, metrics.screenWidth / 2 - 100],
      outputRange: [1, 1, 0],
      extrapolate: 'clamp',
    });


    return (
      <Fragment>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <View style={{
            flexDirection: 'row'
          }}>
            <View style={{
              height: 50,
              width: 50,
              justifyContent: 'center'
            }}>
              <Icon
                name="chevron-left"
                type="material-community"
                size={40}
                color={appStyles.color.COLOR_BLACK} />
            </View>

            <View style={{
              flex: 1,
              height: 50,
              justifyContent: 'center'
            }}>
              <Text style={{
                fontSize: 20,
                fontWeight: '500',
                color: appStyles.color.COLOR_BLACK
              }} >{"Dumbways Sheet"}</Text>
            </View>

            <View style={{
              flexDirection: 'row'
            }}>
              <View style={{
                height: 50,
                width: 50,
                justifyContent: 'center'
              }}>
                <Icon
                  name="magnify"
                  type="material-community"
                  size={30}
                  color={appStyles.color.COLOR_BLACK} />
              </View>
              <View style={{
                height: 50,
                width: 50,
                justifyContent: 'center'
              }}>
                <Icon
                  name="plus"
                  type="material-community"
                  size={30}
                  color={appStyles.color.COLOR_BLACK} />
              </View>
            </View>
          </View>




          <View style={styles.row}>
            <Animated.View style={[styles.column, { width: fieldWidth }]}>
              <Animated.View style={[styles.tableHeaderColumns]}>
                <Animated.View style={[styles.tableFieldResize, { opacity: fieldHide }]}>
                  <Text style={[styles.titleField]}>{this.columns[0].title}</Text>
                  <Icon
                    name="menu-down"
                    type="material-community"
                    size={25}
                    color={appStyles.color.COLOR_BLACK} />
                </Animated.View>
              </Animated.View>
              {this.data.map((item, i) =>
                <View style={styles.tableColumns}>
                  <Text style={styles.titleField}>{item.title}</Text>
                </View>
              )}
            </Animated.View>

            <ScrollView
              scrollEventThrottle={16}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: this.state.scrollX } } }]
              )}
              horizontal
              showsHorizontalScrollIndicator={false}>

              <View style={styles.row}>
                {this.columns.map((item, i) => i !== 0 &&
                  <View key={i} style={[styles.column]}>

                    <View style={styles.tableHeaderColumns}>
                      <Text style={styles.titleField}>{item.title}</Text>
                      <Icon
                        name="menu-down"
                        type="material-community"
                        size={25}
                        color={appStyles.color.COLOR_BLACK} />
                    </View>

                    {this.data.map((item, i) =>
                      <View style={styles.tableColumns}>
                        <Text style={styles.titleField}>{item.title}</Text>
                      </View>
                    )}

                  </View>
                )}
              </View>
            </ScrollView>
          </View>

        </SafeAreaView>
      </Fragment >
    )
  }
}

export default Lists