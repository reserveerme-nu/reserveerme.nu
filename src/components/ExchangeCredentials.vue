<template>
    <b-card
        title="Exchange Credentials"
        style="background-color: darkgrey"
    >
        <b-button v-b-modal.credentialsmodal>Change Credentials</b-button>
        <b-modal id="credentialsmodal" title="Exchange Credentials" @ok="this.handleOk">
            <p class="my-4">Please wait a couple of minutes for all the screens to be updated.</p>
            <p>Username (or email adress)</p>
            <b-input v-model="username" type="text"></b-input>
            <br>
            <p>Password</p>
            <b-input v-model="password" type="password"></b-input>
        </b-modal>
    </b-card>
</template>

<script>
    import ApiService from "../api.service";
    export default {
        name: "ExchangeCredentials",
        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            handleOk(bvModalEvent) {
                bvModalEvent.preventDefault()

                this.handleSubmit()
            },
            handleSubmit() {
                if(this.username === '' || this.password === '') {
                    return
                }

                ApiService.SetExchangeCredentials(this.username, this.password).then((response) => {
                    console.log(response.status)
                    if(response.status === 202) {
                        this.$nextTick(() => {
                            this.$bvModal.hide('credentialsmodal')
                        })
                    }
                })
            }
        }
    }
</script>

<style scoped>

</style>