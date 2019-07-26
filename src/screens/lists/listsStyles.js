import { StyleSheet, Platform } from 'react-native';

import appStyles from './../../configs/appStyles';
import metrics from './../../configs/metrics';

const styles = StyleSheet.create({
  column: {
    flexDirection: 'column',
    width: metrics.screenWidth / 2,
    borderRightWidth: 1,
    borderColor: appStyles.color.COLOR_BORDER
  },
  tableHeaderColumns: {
    borderTopWidth: 1,
    borderBottomWidth: 2,
    borderBottomColor: '#516AE8',
    borderColor: appStyles.color.COLOR_BORDER,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center'
  },
  tableColumns: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: appStyles.color.COLOR_BORDER,
    padding: 10
  },
  tableFieldResize: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  titleField: {
    fontSize: 14,
    fontWeight: '500',
    color: appStyles.color.COLOR_BLACK
  },
  row: {
    flexDirection: 'row'
  }
});

export default styles;
