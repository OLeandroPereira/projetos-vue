<template>
  <div>
    <v-card
        class="d-flex"
        height="625"
        max-width="100%"
        color="#2d2640"
      >
      <div style="margin: 100px 180px; padding: 0 30px 0; text-align: center">
        <h1 style="font-family: DMSerif; font-size: 60px; margin: 20px; color: white">Humanizing your insurance.</h1>
        <p style="color: white">Get your life insurance coverage easier and faster. We blend our expertise and technology to help you find the plan that’s right for you. Ensure you and your loved ones are protected.</p>
        <v-btn
        class="ma-2"
        outlined
        color="white"
      >
        VIEW PLANS
      </v-btn>
      </div>
      <v-col cols="6" md="6">
        <v-img style="margin-top: 200px"
          src="https://insure-landing-page-flax.vercel.app/img/image-intro-desktop.8ac69ec7.jpg"
          height="580"
          max-width="500"
          >
        </v-img>
      </v-col>
    </v-card>
  
    <div style="width:330px; border-top: 1px solid; margin: 30vh 0 0 27vh; font-family: DMSerif; font-size: 25px">
      <h1>We’re different</h1>
    </div>

    <v-container class="mt-16">
        <v-layout justify-end class="pa-10">
          <v-flex xs3>
            <v-card style="height: 300px" flat>
              <v-card-text style="text-align: center">
                <v-avatar 
                class="mb-5"
                color="#4566"
                size="75"
                >
                  <v-icon 
                  dark
                  size="75"
                  >
                    mdi-account-circle
                  </v-icon>
                </v-avatar>
                <h3 class="mb-5" color="white">Snappy Process</h3>
                <p>Our application process can be completed in minutes, not hours. Don’t get stuck filling in tedious forms.</p> 
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-card style="height: 300px" flat>
              <v-card-text style="text-align: center">
                <v-avatar 
                class="mb-5"
                color="#4566"
                size="75"
                >
                  <v-icon 
                  dark
                  size="75"
                  >
                    mdi-account-circle
                  </v-icon>
                </v-avatar>
                <h3 class="mb-5" color="white">Affordable Prices</h3>
                <p>We don’t want you worrying about high monthly costs. Our prices may be low, but we still offer the best coverage possible.</p> 
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs3>
            <v-card style="height: 300px" flat>
              <v-card-text style="text-align: center">
                <v-avatar 
                class="mb-5"
                color="#4566"
                size="75"
                >
                  <v-icon 
                  dark
                  size="75"
                  >
                    mdi-account-circle
                  </v-icon>
                </v-avatar>
                <h3 class="mb-5" color="white">People First</h3>
                <p>Our plans aren’t full of conditions and clauses to prevent payouts. We make sure you’re covered when you need it.</p>
              </v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>

      <v-container class="mt-16">
        <v-layout justify-center class="mb-16">
          <v-flex xs8>
            <v-card flat style="background: #2d2640">
              <div style="width:430px; height: 242px; font-family: DMSerif; font-size: 25px; margin-left: 120px; color: white">
                <h1>Find out more about how we work</h1>
              </div>
            </v-card>
            
          </v-flex>
          
          <v-flex xs3 text-end>
            <div style="background: #2d2640">
              <v-btn
              style="margin: 103px"
              outlined
              color="white"
            >
              HOW WE WORK
            </v-btn>
            </div>
            
          </v-flex>
        </v-layout>
      </v-container>
  </div>
</template>

<script>
export default {
name
}
</script>


<style>
  
</style>