/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import SupportForm from './SupportForm';
import ReportProblem from './ReportProblem';
import {name as appName} from './app.json';
import Login from './viet/Components/Home';

AppRegistry.registerComponent(appName, () => ReportProblem);
