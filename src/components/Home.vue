<template>
    <div>
        <h1 class="display-3 font-weight-light mb-4">Make business and consult your stocks.</h1>
        <v-sheet :elevation="6" class="pa-2 primary">
            <v-icon class="white--text mr-3">
                info
            </v-icon>
            <span class="headline white--text font-weight-light">
                You can save and load the data.
            </span>
        </v-sheet>
        <v-sheet :elevation="6" class="pa-2 success mt-3">
            <v-icon class="white--text mr-3">
                info
            </v-icon>
            <span class="headline white--text font-weight-light">
                Click on 'Finish The Day' to start new day of business!
            </span>
        </v-sheet>
        <v-divider class="my-4" />
        <p class="display-1"><strong>Your Balance:</strong> {{ funds | currency }} </p>
    </div>
</template>

<script>
export default {
    computed: {
        funds() {
            return this.$store.getters.funds;
        }
    }
}
</script>

<style>

</style>
