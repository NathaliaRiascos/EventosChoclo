import { mount, createLocalVue, shallowMount } from '@vue/test-utils';
import QBUTTON from './demo/QBtn-demo.vue';
import * as All from 'quasar';
import UserTableInstance from '../../../src/components/UsersAdmComponents/UsersTableInstance.vue'

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

  const wrapper = mount(UserTableInstance, {
    localVue,
    propsData: {
        id: 123456789,
        name: "Jose Damian Hernandez",
        email: "JoseDM@gmail.com"
    }
  });

  const vm = wrapper.vm;

  it('Probando los parrafos con props', () => {

    const parrafos = wrapper.findAll('p')
    const p1 = parrafos.at(0)
    //expect(p1.is('p')).toBe(true)
    expect(p1.text()).toBe('123456789')

    const p2 = parrafos.at(1)
    expect(p2.text()).toBe('Jose Damian Hernandez')
  });
})