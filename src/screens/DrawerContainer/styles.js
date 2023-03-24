import { StyleSheet } from 'react-native';
import { PRIMARY_COLOR } from '../../utils/constants';

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'column',
  },
  headerContainer:{
    backgroundColor: PRIMARY_COLOR,
    height:200,
    flexDirection: 'column',
    justifyContent:'center',
    alignItems: 'center',
  },
  headerTitle:{
    color:'white',
    fontSize: 28,
    fontWeight:'bold'
  },
  headerSub:{
    color: 'white',
    fontSize: 16,
    marginTop:6
  },
  contentContainer:{
    paddingHorizontal: 20,
    marginTop:20
  },
});

export default styles;
