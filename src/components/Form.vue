<template>
    <form
        class="form"
        @submit.prevent="submitData"
    >
        <div class="form__group">
            <Control
                type="text"
                label="Имя"
                v-model="firstname"
            />
            <Control
                type="text"
                label="Фамилия"
                v-model="lastname"
            />
        </div>
        <div class="form__group">
            <Control
                type="date"
                label="Дата выдачи заработной платы"
                v-model="payDate"
            />
            <Control
                type="text"
                label="Количество отработанных дней"
                v-model="countOfWorkedDays"
            />
        </div>
        <div class="form__group">
            <Control
                type="text"
                label="Оклад"
                v-model="payAmount"
            />
        </div>

        <div class="form__wrapper">
            <button class="form__button">Добавить</button>
        </div>
    </form>
</template>

<script>
import Control from '@/components/Control';

export default {
    name: 'Form',
    components: {
        Control
    },
    data() {
        return {
            firstname: null,
            lastname: null,
            payDate: null,
            payAmount: null,
            countOfWorkedDays: null
        };
    },
    methods: {
        submitData() {
            const formData = new FormData();
            formData.append('firstname', this.firstname);
            formData.append('lastname', this.lastname);
            formData.append('payDate', this.payDate);
            formData.append('payAmount', this.payAmount);
            formData.append('countOfWorkedDays', this.countOfWorkedDays);

            fetch('https://httpbin.org/post', {
                method: 'POST',
                body: formData
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                });
        }
    }
}
</script>

<style lang="scss" scoped>
.form {
    padding: 24px;
    gap: 24px;
    display: grid;

    &__group,
    &__wrapper {
        gap: 24px;
        display: grid;
        grid-auto-flow: column;
    }

    &__group {
        grid-auto-columns: 1fr;
    }

    &__wrapper {
        grid-auto-columns: min-content;
    }

    &__button {
        padding: 8px 16px;
        border: none;
        border-radius: 4px;
        font: inherit;
        background: var(--primary-color);
        color: #ffffff;

        &:focus {
            box-shadow: 0 0 0 2px var(--primary-transparent-color);
            outline: none;
        }
    }
}
</style>