<template>
    <div class="header">
        <div class="header-logo">
            <router-link to="/">
                <div class="logo-link">
                    <img src="../assets/chop_logo.png" style="width: 24px; height: 24px;">
                    <h2 class="logo-text">
                        CHOP
                    </h2>
                </div>
            </router-link>
        </div>
        <div v-if="isLoggedIn" class="sign-in-out">
            <button @click="handleSignOut" class="sign-out-button">Sign Out</button>
        </div>
        <div v-else class="sign-in-out">
            <router-link to="/login">
                <button class="sign-in-button">Sign In</button>
            </router-link>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import router from '@/router';
import { app } from '@/main';
// import { } from 'firebase/app';

export default defineComponent({
    name: 'MyHeader',
    components: {
    },
    setup() {

        const isLoggedIn = ref(false)

        let auth = getAuth(app);
        onMounted(() => {
            onAuthStateChanged(auth, (user) => {
                if (user) {
                    isLoggedIn.value = true;
                } else {
                    isLoggedIn.value = false;
                }
            })
        })


        const handleSignOut = () => {
            signOut(auth).then(() => {
                router.push('/');
            })
        }

        const handleDropdown = () => {
            let dropdown = document.getElementById("my-dropdown");
            dropdown?.classList.toggle("show");
        }

        window.onclick = function (event) {

            const target = event.target as HTMLParagraphElement
            if (!target?.matches('.dropbtn')) {
                var dropdowns = document.getElementsByClassName("dropdown-items");
                var i;
                for (i = 0; i < dropdowns.length; i++) {
                    var openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    }
                }
            }
        }

        return {
            handleSignOut,
            isLoggedIn,
            handleDropdown,
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



.header {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0px;
    gap: 40px;

    max-width: 100%;
    min-width: 900px;
    margin: 0 auto;
    position: fixed;
    top: 12px;
    left: 50%;
    transform: translate(-50%);

    /* background-color: #f1f1f1; */
}

.header-logo {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 8px;
    gap: 8px;

    width: 155px;
    height: 40px;


    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
}

.header-logo a {
    text-decoration: none;
}

.logo-link {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 8px;
}

.sign-in-out {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-self: flex-end;
    gap: 24px;

    height: 44px;

    flex: none;
    order: 1;
    flex-grow: 0;
}

.sign-out-button {
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
    background-color: #7f5af0;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
}

.sign-in-button {
    padding: 10px 20px;
    border-radius: 30px;
    border: none;
    background-color: #7f5af0;
    color: #fff;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
}

.logo-text {
    font-size: 24px;
    line-height: 32px;
    /* or 133% */

    display: flex;
    align-items: center;

    /* Primary/300 - base */

    color: #2cb67d;
}

@media (max-width: 768px) {
    .header {
        min-width: 100%;
        padding: 0 20px;
    }
}

@media (max-width: 600px) {
    .header {
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 20px;
        padding: 0 20px 20px 20px;
    }

    .header-logo {
        justify-content: center;
        width: 100%;
        order: 0;
    }

    .sign-in-out {
        justify-content: center;
        width: 100%;
        order: 1;
    }
}
</style>