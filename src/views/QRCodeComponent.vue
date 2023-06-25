<template>
    <div class="qr-container">
        <HeaderComponent />
        <div class="qr-form">
            <p>Enter your URL</p>
            <input type="text" v-model="linkText" id="link-text" @keyup.enter="generateQR" placeholder="Enter your URL">
            <div id="imgBox">
                <img :src="qrLink" id="qrImage">
            </div>
            <button @click="generateQR">Generate QR Code</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HeaderComponent from '@/components/HeaderComponent.vue';

export default defineComponent({
    name: 'QRCodeComponent',
    components: {
        HeaderComponent,
    },
    data() {
        return {
            linkText: '',
            imgBox: document.getElementById("imgBox"),
            qrImage: document.getElementById("qrImage") as HTMLImageElement,
            qrLink: ''
        }
    },
    methods: {
        generateQR() {
            if (!this.linkText) {
                alert("Please enter a URL");
            } else {
                this.qrLink = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + this.linkText;
                this.linkText = '';
            }

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

.qr-container {
    width: 100%;
    height: 100vh;
    background: #16161a;
}

.qr-form {
    width: 400px;
    padding: 25px 35px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    border: 2px solid #010101;
    border-radius: 10px;
}

.qr-form p {
    font-weight: 600;
    font-size: 20px;
    margin-bottom: 8px;

    color: #94a1b2;
}

.qr-form input {
    width: 100%;
    padding: 12px 12px;
    margin: 10px 0 20px;
    border: 1px solid #7f5af0;
    border-radius: 12px;
    outline: 0;
}

.qr-form button {
    padding: 12px 24px;

    width: 100%;
    height: 48px;

    /* Primary/400 */

    color: #FFFFFF;

    background: #7f5af0;
    border-radius: 100px;
    border: none;

    box-shadow: 0 10px 10px rgba(0, 0, 0, 0.1);

    cursor: pointer;
}

#imgBox {
    width: 200px;
    border-radius: 5px;
    margin: 10px auto;
}

#qrImage {
    width: 100%;
    padding: 10px;
}

@media (max-width: 600px) {
    .qr-form {
        width: 300px;
    }
}
</style>