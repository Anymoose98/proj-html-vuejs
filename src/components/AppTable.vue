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
                            <tr>
                                <th scope="row">1</th>
                                <td><img class="img-club" src="../../public/club-1.png" alt=""> Instambul Sports</td>
                                <td class="px-0 text-center">18</td>
                                <td class="px-0 text-center">2</td>
                                <td class="px-0 text-center">0</td>
                                <td class="px-0 text-center">42</td>
                            </tr>
                            <tr>
                                <th scope="row">2</th>
                                <td><img class="img-club" src="../../public/club-2.png" alt=""> United Fs Club</td>
                                <td class="px-0 text-center">14</td>
                                <td class="px-0 text-center">2</td>
                                <td class="px-0 text-center">1</td>
                                <td class="px-0 text-center">35</td>
                            </tr>
                            <tr>
                                <th scope="row">3</th>
                                <td><img class="img-club" src="../../public/club-3.png" alt=""> Schalke Club</td>
                                <td class="px-0 text-center">13</td>
                                <td class="px-0 text-center">3</td>
                                <td class="px-0 text-center">0</td>
                                <td class="px-0 text-center">32</td>
                            </tr>
                            <tr>
                                <th scope="row">4</th>
                                <td><img class="img-club" src="../../public/club-4.png" alt=""> Inter Club</td>
                                <td class="px-0 text-center">13</td>
                                <td class="px-0 text-center">3</td>
                                <td class="px-0 text-center">0</td>
                                <td class="px-0 text-center">32</td>
                            </tr>
                            <tr>
                                <th scope="row">5</th>
                                <td><img class="img-club" src="../../public/league-club-5.png" alt=""> Madrid Club</td>
                                <td class="px-0 text-center">13</td>
                                <td class="px-0 text-center">3</td>
                                <td class="px-0 text-center">0</td>
                                <td class="px-0 text-center">32</td>
                            </tr>
                            <tr>
                                <th scope="row">6</th>
                                <td><img class="img-club" src="../../public/club-6.png" alt=""> Schalke Club</td>
                                <td class="px-0 text-center">13</td>
                                <td class="px-0 text-center">3</td>
                                <td class="px-0 text-center">0</td>
                                <td class="px-0 text-center">32</td>
                            </tr>
                            <tr>
                                <th scope="row">7</th>
                                <td><img class="img-club" src="../../public/club-7.png" alt=""> Arsenal Club</td>
                                <td class="px-0 text-center">13</td>
                                <td class="px-0 text-center">3</td>
                                <td class="px-0 text-center">0</td>
                                <td class="px-0 text-center">32</td>
                            </tr>
                            <tr>
                                <th scope="row">8</th>
                                <td><img class="img-club" src="../../public/club-8.png" alt=""> Bayern Club</td>
                                <td class="px-0 text-center">13</td>
                                <td class="px-0 text-center">3</td>
                                <td class="px-0 text-center">0</td>
                                <td class="px-0 text-center">32</td>
                            </tr>
                            <tr>
                                <th scope="row">9</th>
                                <td><img class="img-club" src="../../public/club-9.png" alt=""> Atletico Club</td>
                                <td class="px-0 text-center">13</td>
                                <td class="px-0 text-center">3</td>
                                <td class="px-0 text-center">0</td>
                                <td class="px-0 text-center">32</td>
                            </tr>
                        </tbody>
                </table>
                <button type="button" class="btn btn-dark w-100 py-4">View Full League Table</button>
            </div>
            <div class="col-6">
                <h3 class="text-center fw-bold pb-2">Fixtures & Results</h3>
                <table class="table table-borderless table-league-2 align-middle mb-0">
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
            <div class="col-12">
                <img class="img-fluid py-5" src="../../public/reklam.jpg" alt="">
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

.table-league-2 {
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

.pad-td {
    padding: 10.6px !important;
}
</style>