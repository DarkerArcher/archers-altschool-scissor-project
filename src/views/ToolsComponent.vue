<template>
    <div class="tools-container">
        <HeaderComponent />
        <div class="tools-content">
            <router-link to="/shortener">
                <div class="tools-items">

                    <img src="../assets/chop_logo_grey.png" style="width: 100px; height: 100px;">
                    <h3 class="tool-name">
                        URL Shortener
                    </h3>
                </div>
            </router-link>
            <router-link to="/qr-code">
                <div class="tools-items">
                    <img src="../assets/qr_code_logo_grey.png" style="width: 100px; height: 100px;">
                    <h3 class="tool-name">
                        QR Code Generator
                    </h3>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default defineComponent({
    name: 'DashboardComponent',
    components: {
        HeaderComponent,
    },
});
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    font-family: 'Open Sans', sans-serif;
}

.tools-container {
    width: 100%;
    height: 100vh;
    background: #16161a;
}

.tools-content {
    display: flex;
    flex-direction: row;
    gap: 20px;
    align-items: center;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
    padding: 50px 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.tools-content a {
    text-decoration: none;
}

.tools-items {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 10px;
    width: 300px;
    height: 250px;

    padding: 0 20px 20px 20px;

    background-color: #7f5af0;

    border: 1px solid #010101;
    border-radius: 10px;
}

.tools-items h3 {
    color: #fffffe;
}

@media (max-width: 768px) {
    .tools-content {
        flex-direction: column;
    }
}
</style>