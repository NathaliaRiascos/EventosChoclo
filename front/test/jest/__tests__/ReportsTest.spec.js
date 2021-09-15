import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import QBUTTON from './demo/QBtn-demo.vue';
import * as All from 'quasar';
import ReportsAdmin from '../../../src/pages/ReportsAdmin.vue'
import ReportNumbers from '../../../src/components/ReportsComponents/ReportNumbers.vue'

const { Quasar } = All;

const components = Object.keys(All).reduce((object, key) => {
  const val = All[key];
  if (val && val.component && val.component.name != null) {
    object[key] = val;
  }
  return object;
}, {});

describe('Pruebas en la UI de reportes', () => {
  const localVue = createLocalVue();
  localVue.use(Quasar, { components }); // , lang: langEn

  const wrapper = mount(ReportsAdmin, {
    localVue,
    propsData: {
        ReportValues: [
            {
              title: 'Total de eventos',
              number: 500,
              icon: 'fas fa-calendar-day',
              color: 'red-icon'
            },
            {
              title: 'Ganancias totales',
              number: 8000000,
              icon: 'fas fa-users',
              color: 'green-icon'
            },
            {
              title: 'Usuarios totales',
              number: 300,
              icon: 'fas fa-dollar-sign',
              color: 'blue-icon'
            }
        ]
    }
  });

  const vm = wrapper.vm;

  it('Probando los reportes por defecto', () => {
    const reportes = wrapper.findAll(ReportNumbers)
    const rep1 = reportes.at(0)
    expect(rep1.text()).toContain('500' && 'Total de eventos')

    const rep2 = reportes.at(1)
    expect(rep2.text()).toContain('8000000' && 'Ganancias totales')

    const rep3 = reportes.at(2)
    expect(rep3.text()).toContain('300' && 'Usuarios totales')
  });
})