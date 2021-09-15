<template>
  <q-page>
    <div class="rc_body row justify-around">
      <div class="col-md-4 col-sm-9 col-xs-11 q-mt-xl">
          <!--RETURN DIV-->
          <div
           class="rc_go_back q-mb-md"
           @click="goTo('/')"
           >
            <i class="fas fa-arrow-left"></i>
            Volver al <b> inicio </b>
          </div>
        <q-card class="rc_content my-card">
          <q-card-section class="bg-grey text-white">
            <div class="text-h6 rc_title q-pl-md">Recuperar cuenta</div>
          </q-card-section>

          <q-separator />

          <q-card-actions class="row col-12">
            <q-form class="row col-12 justify-around">
              <p class="col-11 rc_p q-ma-md">
                Ingresa el correo relaciondo a tu cuenta y te enviaremos un
                código de verificación
              </p>
              <q-input
                borderless
                type="mail"
                v-model="recovery_email"
                label="Email"
                class="col-11 rc_input q-ma-sm"
              >
                <template v-slot:prepend>
                  <q-icon color="grey" name="email" />
                </template>
              </q-input>

              <q-btn
                type="submit"
                class="col-11 rc_btn q-mt-sm"
                label="Enviar"
                color="grey"
              />
            </q-form>
          </q-card-actions>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script>
import { functions } from '../functions.js'

export default {
  name: 'Recovery',
  mixins: [functions],
  data () {
    return {
      recovery_email: ''
    }
  }
}
</script>

<style>
.rc_body {
  height: 100vh;
  background-color: #c4c4c4;
}

.rc_content {
    padding-bottom: 10px;
    border-radius: 25px !important;
}

.rc_go_back {
  font-family: 'Quicksand';
  font-size: 1.4rem;
  color: white;
  cursor: pointer;
}

.rc_title {
    font-family: 'Quicksand', sans-serif;
}

.rc_p {
  color: #43434a;
  font-family: 'Quicksand', sans-serif;
  font-weight: 400;
  font-size: 20px;
  text-align: justify;
  border-radius: 25px;
}

.rc_input {
  padding: 0 15px;
  background-color: #f2f2f2;
  font-family: "Quicksand", sans-serif;
  font-weight: 600;
  font-size: 18px;
  border-radius: 25px;
}

.rc_btn {
  font-family: 'Quicksand', sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  text-transform: initial;
  border-radius: 25px;
}

</style>
