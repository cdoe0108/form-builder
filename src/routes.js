import App from './App';
import FormBuilder from './FormBuilder';
import LiveForm from './LiveForm';

const ROUTES = [
  {
    path: '/',
    component: App,
    exact: true
  },
  {
    path: '/liveForm',
    component: LiveForm,
    exact: true
  },
  {
    path: '/formBuilder',
    component: FormBuilder,
    exact: true
  }
];

export default ROUTES;
