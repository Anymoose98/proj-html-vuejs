<!-- SEZIONE JS SCRIPT -->
<script>
import { store } from '../store';

export default {
    name: "AppTable",

    data() {
        return {
            store,
        }
    },
}
</script>

<!-- SEZIONE HTML -->
<template lang="">
  <div class="container mt-5">
    <div class="container">
        <div class="row">
            <!-- LEAGUE TABLE -->
            <div class="col-6">
                <h3 class="text-center fw-bold pb-2">League Table</h3>
                <table class="table table-borderless table-light table-league align-middle mb-0">
                    <thead>
                        <tr class="table-dark fs-5 ">
                            <th scope="col" colspan="2">TEAM</th>
                            <th scope="col" class="px-0 text-center">W</th>
                            <th scope="col" class="px-0 text-center">D</th>
                            <th scope="col" class="px-0 text-center">L</th>
                            <th scope="col" class="px-0 text-center">PTS</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr v-for="(squad, index) in store.team" :key="index">
                                <th scope="row"> {{ index + 1 }} </th>
                                <td><img class="img-league-club" :src="squad.img" :alt="squad.name"> {{ squad.name }}</td>
                                <td class="px-0 text-center">{{ squad.w }}</td>
                                <td class="px-0 text-center">{{ squad.d }}</td>
                                <td class="px-0 text-center">{{ squad.l }}</td>
                                <td class="px-0 text-center">{{ squad.pts }}</td>
                            </tr>
                        </tbody>
                </table>
                <button type="button" class="btn btn-dark w-100 py-4">View Full League Table</button>
            </div>
            <!-- FIXTURES & RESULTS TABLE -->
            <div class="col-6">
                <h3 class="text-center fw-bold pb-2">Fixtures & Results</h3>
                <table class="table table-borderless table-striped table-results align-middle mb-0">
                        <tbody>
                            <tr class="my-bg-gray">
                                <td colspan="2" class="pad-td text-end"><img class="img-club" src="../../public/club-1.png" alt=""> Instambul Sports</td>
                                <td class="text-center fw-bold">VS</td>
                                <td colspan="2">United Fs Club <img class="img-club" src="../../public/club-2.png" alt=""></td>
                            </tr>
                            <tr class="my-bg-lightgray">
                                <td colspan="2" class="pad-td text-end"><img class="img-club" src="../../public/club-3.png" alt=""> Shcalke Club</td>
                                <td class="text-center fw-bold">VS</td>
                                <td colspan="2">Inter Club <img class="img-club" src="../../public/club-4.png" alt=""></td>
                            </tr>
                            <tr class="my-bg-gray">
                                <td colspan="2" class="pad-td text-end"><img class="img-club" src="../../public/league-club-5.png" alt=""> Madrid Club</td>
                                <td class="text-center fw-bold">VS</td>
                                <td colspan="2">Shcalke Club <img class="img-club" src="../../public/club-6.png" alt=""></td>
                            </tr>
                            <tr class="my-bg-lightgray">
                                <td colspan="2" class="pad-td text-end"><img class="img-club" src="../../public/club-7.png" alt=""> Arsenal Club</td>
                                <td class="text-center fw-bold">VS</td>
                                <td colspan="2">Bayern Club <img class="img-club" src="../../public/club-8.png" alt=""></td>
                            </tr>
                            <tr class="my-bg-gray">
                                <td colspan="2" class="pad-td text-end"><img class="img-club" src="../../public/club-9.png" alt=""> Atletico Club</td>
                                <td class="text-center fw-bold">VS</td>
                                <td colspan="2">Instambul Sports <img class="img-club" src="../../public/club-1.png" alt=""></td>
                            </tr>
                            <tr class="my-bg-lightgray">
                                <td colspan="2" class="pad-td text-end"><img class="img-club" src="../../public/club-2.png" alt=""> United Fs Club</td>
                                <td class="text-center fw-bold">VS</td>
                                <td colspan="2"> Shcalke Club <img class="img-club" src="../../public/club-3.png" alt=""></td>
                            </tr>
                            <tr class="my-bg-gray">
                                <td colspan="2" class="pad-td text-end"><img class="img-club" src="../../public/club-4.png" alt=""> Inter Club</td>
                                <td class="text-center fw-bold">VS</td>
                                <td colspan="2">Madrid Club <img class="img-club" src="../../public/league-club-5.png" alt=""></td>
                            </tr>
                            <tr class="my-bg-lightgray">
                                <td colspan="2" class="pad-td text-end"><img class="img-club" src="../../public/club-6.png" alt=""> Shcalke Club</td>
                                <td class="text-center fw-bold">VS</td>
                                <td colspan="2">Arsenal Club <img class="img-club" src="../../public/club-7.png" alt=""></td>
                            </tr>
                            <tr class="my-bg-gray">
                                <td colspan="2" class="pad-td text-end"><img class="img-club" src="../../public/club-8.png" alt=""> Bayern Club</td>
                                <td class="text-center fw-bold">VS</td>
                                <td colspan="2">Atletico Club <img class="img-club" src="../../public/club-9.png" alt=""></td>
                            </tr>
                        </tbody>
                </table>
                <button type="button" class="btn btn-dark w-100 py-4">View Full Fixtures</button>
            </div>
            <!-- IMG 20% -->
            <div class="col-12">
                <img class="img-fluid py-5" src="../../public/sconto.jpg" alt="">
            </div>
        </div>
    </div>
    </div>
</template>

<!-- SEZIONE STYLE -->
<style lang="scss" scoped>
@use '../styles/generals.scss' as *;

.table-league {
    border: 1px solid lightgray;
}

.table-results, .table-league {
    margin: 0 auto;
}

.my-bg-gray {
    background-color: rgb(243, 243, 243);
}

.my-bg-lightgray {
    background-color: rgb(232, 232, 232);
}

.img-club {
    width: 41px;
}

.img-league-club{
    width: 46px;
}

.pad-td {
    padding: 10.6px !important;
}
</style>