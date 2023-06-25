<template>
    <div class="landing-container">
        <HeaderComponent />
        <div class="landing-content">
            <h1 class="landing-title">
                This is <span class="green">CHOP</span>
            </h1>
            <p class="landing-text">
                A URL shortener for the modern web. With one click, you can create <span class="green">short links</span> and <span class="green">QR Codes</span> that are easy to share on all social platforms. Come give it a try!
            </p>
            <div class="landing-buttons">
                <router-link to="/login" v-if="!isLoggedIn"><button  class="landing-button">Get Started</button></router-link>
                <router-link to="/tools" v-else><button class="landing-button">Tools</button></router-link>
                <a href="https://darkerarcher.netlify.app/" target="_blank" rel="noopener noreferrer"><button class="landing-button">Contact me</button></a>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

export default defineComponent({
    name: 'LandingPage',
    components: {
        HeaderComponent,
    },
    setup() {
        const isLoggedIn = ref(false)

        let auth = getAuth();
        onMounted(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    isLoggedIn.value = true;
                } else {
                    isLoggedIn.value = false;
                }
            })
            console.log(isLoggedIn.value)
        })

        return {
            isLoggedIn,
        }
    }
});
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Open Sans', sans-serif;
}

.landing-container {
    width: 100%;
    height: 100vh;
    background: #16161a;
}

.landing-content {
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.green {
    color: #2cb67d;
}

.landing-title {
    font-size: 96px;
    font-weight: 700;
    margin: 15px 0;
    text-align: left;
    color: #fffffe;
}

.landing-text {
    font-size: 24px;
    font-weight: 400;
    margin: 20px 0;
    text-align: justify;

    color: #94a1b2;
}

.landing-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 25px 0;
    gap: 10px;
}

.landing-button {
    padding: 10px 20px;
    border-radius: 5px;
    border: none;
    background-color: #7f5af0;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
}

@media screen and (max-width: 768px) {
    .landing-title {
        font-size: 64px;
    }

    .landing-text {
        font-size: 18px;
    }
}
</style>