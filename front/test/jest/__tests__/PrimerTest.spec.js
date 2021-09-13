import {mountQuasar} from '@quasar/quasar-app-extension-testing-unit-jest';
import UserTableInstance from '../../../src/components/UsersAdmComponents/UsersTableInstance.vue'

describe('Prueba inicial para comprobaciones', () => {

    test('Probar que las props reflejan los datos correctos', () => {
        const wrapper = mountQuasar(UserTableInstance, {
            quasar: {
                components: {
                    UserTableInstance,
                },
            },
            propsData: {
                id: 123456789,
                name: "Jose Damian Hernandez",
                email: "JoseDM@gmail.com"
            },
        });

        expect(wrapper).toBeTruthy(); /* Esto funciona aunque tira unos errores */


        /*const p0 = wrapper.find('p').at(0).text()

        expect(p0).toBe('123456789');*/

        /*const p = wrapper.find('p').text()
        expect(p).toContain('Jose Damian')*/


        expect(wrapper.text()).toContain('CC. 123456789');
    });

    /*test('Montar un componente custom y pasarle props', () => {
        const wrapper = shallow(<UserTableInstance id={123456789}  name="José Damian" email="JoseDM@gmail.com" />)
        const cc = wrapper.find('p').at(3).text()

        expect(cc).toBe('CC. 123456789')
    })*/

    /* EL MAYOR PROBLEMA ES QUE NO ME DEJA SELECCIONAR UN COMPONENTE ESPECIFICO, COMO POR EJEMPLO, EL SEGUNDO P */
});