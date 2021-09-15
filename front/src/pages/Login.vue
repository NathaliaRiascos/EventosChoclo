<template>
  <q-page>
    <div class="row lg_body q-pt-xl justify-center">
      <div class="col-md-4 col-sm-9 col-xs-11">
        <!--RETURN DIV-->
        <div class="lg_go_back q-mb-md" @click="$router.go(-1)">
          <i class="fas fa-arrow-left"></i>
          Volver al <b> inicio </b>
        </div>
        <!--TABS-->
        <q-tabs v-model="tab" class="lg_tab" indicator-color="transparent">
          <q-tab
            name="sign_in"
            class="tablinks tab_left"
            :class="{ selected: tab == 'sign_in' }">
            Sign in</q-tab>
          <q-tab
            name="sign_up"
            class="tablinks tab_right"
            :class="{ selected: tab == 'sign_up' }">
            Sign Up</q-tab>
        </q-tabs>

        <!--CARD CONTENT-->
        <q-tab-panels class="tab_container" v-model="tab" animated>
          <!--LOGIN-->
          <q-tab-panel name="sign_in">
            <q-form
              @submit="login()"
              action="submit"
              class="col-md-4 col-xs-12 justify-center"
            >
              <!--EMAIL-->
              <q-input
                class="lg_input q-mt-md"
                borderless
                v-model="user.user_email"
                label="Email"
                required
                :rules="[(val) => !!val || 'Este campo es necesario']"
              >
                <template v-slot:prepend>
                  <q-icon color="grey" name="mail" />
                </template> </q-input
              ><br />
              <!--PASSWORD-->
              <q-input
                class="lg_input q-my-md"
                borderless
                v-model="user.user_password"
                label="Clave"
                :type="isPwd ? 'password' : 'text'"
                required
                :rules="[(val) => !!val || 'Este campo es necesario']"
              >
                <template v-slot:prepend>
                  <q-icon color="grey" name="vpn_key" />
                </template>
                <template v-slot:append>
                  <q-icon
                    color="grey"
                    :name="isPwd ? 'visibility_off' : 'visibility'"
                    @click="isPwd = !isPwd"
                  />
                </template>
              </q-input>
              <div class="row justify-end">
                <q-btn class="lg_btn" flat to="/recovery"
                  >¿Olvidaste tu contraseña?</q-btn
                >
              </div>
              <q-btn
                type="submit"
                class="lg_btn q-mt-sm full-width"
                label="Iniciar sesión"
                color="grey"
              />
            </q-form>
            <q-btn
              type="submit"
              icon="facebook"
              class="lg_btn q-mt-sm full-width"
              label="Iniciar con facebook"
              color="primary"
              @click="loginWithFacebook"
            />
          </q-tab-panel>
          <!--REGISTER-->
          <q-tab-panel class="tab_container" name="sign_up">
            <q-form
              @submit="register()"
              action="submit"
              class="col-md-4 col-xs-12"
            >
              <!--NAME-->
              <q-input
                class="lg_input q-mt-md"
                borderless
                v-model="user.user_name"
                label="Nombre"
                required
                :rules="[(val) => !!val || 'Este campo es necesario']"
              >
                <template v-slot:prepend>
                  <q-icon color="grey" name="badge" />
                </template> </q-input
              ><br />
              <!--ID-->
              <q-input
                class="lg_input q-mt-sm"
                borderless
                v-model="user.user_id"
                label="CC"
                required
                :rules="[(val) => !!val || 'Este campo es necesario']"
              >
                <template v-slot:prepend>
                  <q-icon color="grey" name="fingerprint" />
                </template> </q-input
              ><br />
              <!--EMAIL-->
              <q-input
                class="lg_input q-mt-sm"
                borderless
                type="mail"
                v-model="user.user_email"
                label="Email"
                required
                :rules="[(val) => !!val || 'Este campo es necesario']"
              >
                <template v-slot:prepend>
                  <q-icon color="grey" name="email" />
                </template> </q-input
              ><br />
              <!--PASSWORD-->
              <q-input
                class="lg_input q-mt-sm"
                borderless
                v-model="user.user_password"
                label="Clave"
                :type="isPwd1 ? 'password' : 'text'"
                required
                :rules="[(val) => !!val || 'Este campo es necesario']"
              >
                <template v-slot:prepend>
                  <q-icon color="grey" name="vpn_key" />
                </template>
                <template v-slot:append>
                  <q-icon
                    color="grey"
                    :name="isPwd1 ? 'visibility_off' : 'visibility'"
                    @click="isPwd1 = !isPwd1"
                  />
                </template> </q-input
              ><br />
              <!--PASSWORD CONFIRM-->
              <q-input
                class="lg_input q-mt-sm q-mb-lg"
                borderless
                v-model="user.user_passwordConfirm"
                label="Confirmar clave"
                :type="isPwd2 ? 'password' : 'text'"
                required
                :rules="[(val) => !!val || 'Este campo es necesario']"
              >
                <template v-slot:prepend>
                  <q-icon color="grey" name="vpn_key" />
                </template>
                <template v-slot:append>
                  <q-icon
                    color="grey"
                    :name="isPwd2 ? 'visibility_off' : 'visibility'"
                    @click="isPwd2 = !isPwd2"
                  />
                </template>
              </q-input>
              <q-btn
                type="submit"
                class="lg_btn full-width q-mt-sm"
                label="Registrarse"
                color="grey"
              />
            </q-form>
          </q-tab-panel>
        </q-tab-panels>
      </div>
    </div>
  </q-page>
</template>

<script>
import UserService from '../services/UserService'
import { functions } from '../functions.js'

export default {
  name: 'PageIndex',
  mixins: [functions],
  data () {
    return {
      tab: 'sign_in',
      user: {
        user_name: '',
        user_id: '',
        user_email: '',
        user_password: '',
        user_passwordConfirm: ''
      },
      isPwd: true,
      isPwd1: true,
      isPwd2: true
    }
  },
  methods: {
    async loginWithFacebook () {
      console.log('login-facebook')
    },
    async login () {
      try {
        const data = {
          user_email: this.user.user_email,
          user_password: this.user.user_password
        }
        const request = await UserService.login(data)
        if (request.status >= 200 & request.status < 300) {
          localStorage.setItem('token', request.data.data.token)
          localStorage.setItem('user', JSON.stringify(request.data.data.user))
          this.goTo('/')
        }
      } catch (error) {
        this.alert('negative', error.response.data.error)
      }
    },
    async register () {
      try {
        this.activateLoading()
        if (this.user.user_password === this.user.user_passwordConfirm) {
          const request = await UserService.register(this.user)
          if (request.status === 200) {
            this.alert('positive', 'Usuario creado correctamente')
            this.tab = 'sign_in'
          }
        } else {
          console.log(this.user)
          this.alert('negative', 'Las claves no coinciden')
        }
      } catch (error) {
        this.alert('negative', error.response.data.error)
      }
      this.disableLoading()
    }
  }
}
</script>

<style scoped>
.lg_body {
  height: 100vh;
  background-color: #c4c4c4;
}

.lg_go_back {
  font-family: "Quicksand";
  font-size: 1.4rem;
  color: white;
  cursor: pointer;
}

.lg_card {
  width: 100%;
  background: #f5f5f5;
  border-radius: 20px;
}

.lg_tab {
  width: 100%;
  font-family: "Quicksand", sans-serif;
  font-weight: 700;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
}

.tab_container {
  padding-bottom: 10px;
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
}

.lg_input {
  padding: 0 15px;
  background-color: #f2f2f2;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 18px;
  border-radius: 25px;
}

.lg_btn {
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: initial;
  border-radius: 25px;
}

.tablinks {
  width: 50%;
  height: 45px;
  background-color: #414141;
  font-weight: 400;
  font-size: 20px;
  color: #f5f5f5;
  border: none;
  cursor: pointer;
}

.tablinks:hover {
  background-color: #434447;
}

.selected {
  background-color: #404040;
}
</style>
