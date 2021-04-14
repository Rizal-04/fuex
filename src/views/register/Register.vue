<template>
  <div
    style="display:flex;justify-content:center;align-items:center;flex-direction:column;"
  >
    <div style=" margin:20px 0px 20px 0px;" class="w-1/4">
      <div class="card" style=" margin:20px 0px 20px 0px;">
        <div class="card-content">
          <div class="content">
            <p class="title is-3">Sign Up</p>
            <b-field label="Username" style="text-align: left;">
              <b-input
                v-model="dataFromRegister.username"
                type="text"
                placeholder="your username"
              ></b-input>
            </b-field>
            <b-field label="Password" style="text-align: left;">
              <b-input
                v-model="dataFromRegister.password"
                type="password"
                placeholder="your password"
                password-reveal
              ></b-input>
            </b-field>
            <b-field label="Mobile Number" style="text-align: left;">
              <b-input
                v-model="dataFromRegister.numberPhone"
                type="text"
                placeholder="your Mobile Number"
              ></b-input>
            </b-field>
            <div>
              <b-button
                type="is-primary"
                :loading="isLoading"
                @click="handleRegister"
                expanded
                >Sign up</b-button
              >
              <div class="mt-2">
                <p>or</p>
              </div>
              <b-button
                type="is-secondary"
                @click="handleRouteToPageSign('login')"
                expanded
                >Sign in</b-button
              >
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./script.js" />
