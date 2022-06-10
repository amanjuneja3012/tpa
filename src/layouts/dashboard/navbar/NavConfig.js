// routes
import { PATH_DASHBOARD } from '../../../routes/paths';
// components
import SvgIconStyle from '../../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name) => <SvgIconStyle src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const ICONS = {
  banking: getIcon('ic_banking'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
};

const navConfig = [
  // MENU
  // ----------------------------------------------------------------------
  {
    subheader: 'menu',
    items: [
      { title: 'map', path: PATH_DASHBOARD.general.ecommerce, icon: ICONS.dashboard },
      { title: 'members', path: PATH_DASHBOARD.general.members, icon: ICONS.ecommerce },
      { title: 'projects', path: PATH_DASHBOARD.general.analytics, icon: ICONS.analytics },
      { title: 'products', path: PATH_DASHBOARD.general.banking, icon: ICONS.banking },
    ],
  },
];

export default navConfig;
