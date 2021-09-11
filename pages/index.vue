<template>
  <div id="app" :class="{ 'css-mask-support': csssupport }">

    <section id="header" class="d-flex">
      <a href="#" class="" id="music" @click.prevent="updateMusicStatus()"
        :class="{ 'muted': music.stopped }"
      >
        <svg
          style=""
          class=""
          xmlns="http://www.w3.org/2000/svg" version="1.0" width="500" height="500" viewBox="0 0 75 75"
        >
          <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z" style="stroke:#111;stroke-width:5;stroke-linejoin:round;fill:#111;" class="speaker" />
          <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6" style="fill:none;stroke:#111;stroke-width:5;stroke-linecap:round" class="sound-waves" />
        </svg>
      </a>

      <a href="#" v-scroll-to="{ el: `#${name}`, container: '#app', duration: 1000, cancelable: true }" class="d-inline-block ml-1" id="scroll-up">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <g class="uparrow topped">
                <path class="arrow" d="M1 4h10L6 9 1 4"/>
            </g>
        </svg>
      </a>

      <a href="#" v-scroll-to="{ el: '#appeal', container: '#app', duration: 500000, cancelable: true }" class="d-inline-block ml-1" id="scroll-down">
        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
            <g class="downarrow">
                <path class="arrow" d="M1 4h10L6 9 1 4"/>
            </g>
        </svg>
      </a>
    </section>

    <header class="min-vh-100 fullpage-section--top-fade" :id="name" :class="name">
      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-lg-6 about">
            <h2 :class="`${name}__name`">Sterling Nova Lynn Raspe</h2>
            <h3 :class="`${name}__life-dates`">
              8th September 2020<span class="divider"></span>11th May 2021
              <small class="d-block days" style="letter-spacing: -0.5px;">
                two hundred &amp; forty-five precious days
              </small>
            </h3>
          </div>
          <div class="col-lg-6" :class="`${name}__obituary`">
            <div :class="`${name}__obituary__inner`">
              <div id="clouds">
                <div class="cloud cloud--a"></div>
                <div class="cloud cloud--b"></div>
                <div class="cloud cloud--c"></div>
                <div class="cloud cloud--d"></div>
                <div class="cloud cloud--e"></div>
              </div>
              <p>The word <strong>Sterling</strong> comes from the word <em>steorra</em>, meaning <strong>star</strong>. The word <em>nova</em> means <strong>new</strong>. A <em>nova</em> is when a star's gas builds up and triggers an explosion making it shine up to a <strong>million</strong> times <strong>brighter</strong> than normal.</p>
            </div>
          </div>
        </div>
      </div>

      <div class="pigtails">
        <img :src="`i/pigtails.png`" alt="Sterling's signature pigtails">
      </div>
    </header>

    <div class="w-100 w-xl-50 mx-auto my-2 my-lg-10">
      <div class="row justify-content-center align-self-center">
        <div class="col-lg-6">
          <section class="parallax parallax--masked min-vh-100 mx-5 mx-md-0 mt-5 mt-xl-10 mb-0" data-type="background" data-speed="10" ></section>
        </div>
        <div class="col-lg-6">
            <div class="d-flex h-100">
              <div class="row justify-content-center align-self-center">
                <div class="col-12 px-5 pl-xl-5 font-weight-light">
                  <p class="lead">Sterling Raspe was an incredible little girl who was the epitome of strength.</p>
                  <p class=""><strong class="font-weight-bold">Sterling</strong> lived for 245 days and spent 207 of those days in the Pediatric Cardiac Unit in Oak Lawn, IL, USA. She had 9 surgeries, including 4 major heart surgeries. She <strong class="font-weight-bold">was</strong> a very special little girl. Depending on who you ask, <strong class="font-weight-bold">anywhere</strong> between 700 million to two billion - or 1 of <strong class="font-weight-bold">between 4-11 people in the world</strong>.</p>
                  <p>She was <em>very</em> special.</p>
                  <p class="">She was diagnosed with:</p>
                  <ul class="small font-weight-light">
                    <li>hypoplastic left heart syndrome (HLHS)</li>
                    <li>kabuki syndrome</li>
                    <li>being severely immunocompromised (IgG deficient)</li>
                    <li>isomerism/heterotaxy</li>
                    <li>pulmonary stenosis</li>
                    <li>severe/moderate hearing loss</li>
                    <li>hypotonia</li>
                    <li>multiple brain bleeds</li>
                    <li>hip dysplasia</li>
                    <li>hyperinsulinemia</li>
                    <li>&hellip;and unfortunately, that's not a complete list</li>
                  </ul>
                </div>
              </div>
            </div>
        </div>
        <div class="col-12 mt-5 mb-10 follow-my-journey">
          <p class="text-center mt-10 mb-5 mb-md-7 "><span class="d-block  double-dash ">&mdash;&mdash;</span> Here is Sterling's journey, expressed through her <strong class="font-weight-bold">Beads of Courage</strong><span class="d-block double-dash">&mdash;&mdash;</span></p>
          <p class="text-center mb-5 mb-md-7"><span class="d-block double-dash">&mdash;&mdash;</span> <strong class="font-weight-bold">One</strong> bead for <strong class="font-weight-bold">every</strong> scan, test, therapy, surgery, discharge, <em>etc.</em>&hellip; <span class="d-block double-dash">&mdash;&mdash;</span></p>
          <p class="font-weight-bold text-center mb-10 "><span class="d-block double-dash">&mdash;&mdash;</span><span class="text-bigger-x3"> Sterling <span class="d-block d-lg-inline">received</span> <strong class="font-weight-bold brand-3 text-bigger-x5 align-middle p-2 d-block my-n4">{{ totals.beads }}</strong> <strong class="font-weight-bold">beads</strong></span> <span class="d-block double-dash">&mdash;&mdash;</span></p>
        </div>
      </div>
    </div>

    <section class="min-vh-100 beads-of-courage" data-type="background" data-speed="10" >
      <div class="container d-flex h-100">
        <div class="row justify-content-center align-self-center">

          <blockquote class="blockquote" >
            <p class="mb-0">Every time a bead is given, courage is honored, suffering is alleviated, resilience is strengthened, and the experience of <strong>human caring</strong> is affirmed. Every Beads of Courage Program integrates the use of beads, the earliest art form known to humans, as visible, tangible symbols of human experiences that <strong>need</strong> and <strong>deserve</strong> to be <strong>expressed</strong>.</p>
            <footer class="blockquote-footer">
              <a href="https://beadsofcourage.org" target="_blank">https://beadsofcourage.org</a>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <section id="fullsize" class="fullsize">
      <div v-for="(n, i) in 10" :key="i">
        <img class="fullsize__image" :src="`i/bead-long-section-${i}.png`" alt="these images aren't important!">
      </div>
    </section>

    <section id="timeline" class="timeline container">
      <div v-for="(b, n) in beads" :key="b.id" :id="`section--${b.id}`"
        class="timeline__item" :class="`day--${daysSinceBirth(b.date)}`"
      >
        <div class="timeline__image-holder" v-if="b.id.indexOf('.') > -1">
          <img class="timeline__image" :src="`i/bead-sections/${b.id}`" :alt="`this is section ${b.id} of the beads`">
        </div>
        <div class="timeline__description-wrapper" >
          <div class="timeline__description" v-if="b.text || b.image">
            <h3 class="timeline__title" v-if="b.day === true">
              {{ getDaySinceBirthText(b.date) }}
            </h3>
            <h4 class="timeline__date text-muted" v-if="b.day === true">
              {{ b.date }}
            </h4>
            <div class="timeline__notes lead" v-if="b.text">
              <p v-html="nl2br(b.text)"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="min-vh-100 fullpage-section fullpage-section--bottom-fade  fullpage-section--bottom-fade py-10">
      <div class="container">
        <h2 class="display-4 body-text mb-10 text-center">
          over <strong class="font-weight-bold d-block"> 33 ft / 10 m</strong>of string &amp; beads
        </h2>

        <div class="table-responsive small">
          <table class="table mt-10 table-sm">
            <thead class="thead-dark">
              <tr>
                <th>Bead</th>
                <th></th>
                <th>Count</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="count in counts">
                <td class="text-left">{{ count.text }}</td>
                <td class="text-center"><small>{{ count.type }}</small></td>
                <td class="text-center">{{ count.count.reduce((p, a) => p + a, 0) }}</td>
              </tr>
            </tbody>
            <tfoot class="">
              <tr>
                <td colspan="3" class="text-right font-weight-bold pr-4 text-bigger-x2">
                  total beads: {{ totals.beads }}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>

    <div class="row justify-content-center align-self-center">
      <section class="parallax min-vh-100 w-100 my-n5 py-5" data-type="background" data-speed="10" style="mask-image: linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(215,131,127,1) 10%, rgba(215,131,127,1) 90%, rgba(255,255,255,0) 100%);">&nbsp;</section>
    </div>

    <section class="min-min-vh-100 fullpage-section appeal" id="appeal" >
      <div class="container mt-10" :class="{ 'mt-5': appeal === true }">
        <h2 class="body-text font-weight-bold text-center" style="line-height: 1" v-if="appeal === true">
          and even after I had <br/>gone through all of that, my various</br/>diagnosises and disabilities,<br/> as of today, <span class="d-block brand-7">{{ now }},</span> I still haven't qualified for<br/>Medicaid<br/><br/>Do you think I deserve to qualify?<br /><br/>My parents think I do.
        </h2>

        <ul class="mw-50">
          <li class="position-relative" v-if="appeal === true">read my daddy's Medicaid <a href="https://kingsley.sh/posts/2021/sterlings-medicaid-hearing-response" class="stretched-link" target="_blank">Appeal Letter</a></li>
          <li class="or">&mdash;&mdash; <span v-if="appeal === true">or</span> visit &mdash;&mdash;</li>
          <li class="position-relative" title="an incorporated 501(c)(3) non-profit pending IRS approval">
            my non-profit <br/><a href="https://sterlingstrong.foundation" class="stretched-link">Sterling Strong Foundation</a><br/><abbr>Inc.</abbr>
            <a href="https://sterlingstrong.foundation" class="d-block mt-7" target="_blank">
              <img src="/i/sterling-strong-xl.png" class="mw-100 mx-auto" style="width:350px" alt="Sterling Strong Foundation, Inc.">
            </a>
          <li>
          <li class="position-relative" v-if="appeal === true">
            <span class="mt-7 d-block">
              My daddy and mommy <br/>are going to support, advocate,<br/>&amp; fight for children like me.
            </span>
          </li>
          <li class="position-relative" v-if="appeal === true">
            <span class="mt-7 d-block">
              <a href="https://en.wikipedia.org/wiki/Texas_Heartbeat_Act" target="_blank">Unlike these people.</a>
            </span>
          </li>
          <li class="position-relative" v-if="appeal === true">
            <span class="mt-7 d-block">
              My daddy and mommy think <br/>no child should <strong class="font-weight-bold text-bigger d-block">unnecessarily</strong> suffer&hellip;
              <br/><br/><br/><br/>
              <span class="display-1 d-block mt-5">Do <em class="font-weight-bold">you?</em></span>
            </span>
          </li>
        </ul>
      </div>
    </section>

  </div>
</template>

<script>
import $ from 'jquery';
import moment from 'moment'

export default {
  data () {
    return {
      name: 'sterling',

      appeal: true,

      music: {
        stopped: false,
        playing: 0,
        playlist: [],
      },

      dates: [],

      counts: [
        { 'text': 'Admission or Transfer to Intensive Care Unit', 'type': 'Square Heart', count: [3, 1, 0] },
        { 'text': 'Central Line | Midline | Pheresis Catherter Placement & Removal', 'type': 'Orange', count: [39, 105, 35] },
        { 'text': 'Clinic Visit', 'type': 'Blue', count: [10, 0, 0], },
        { 'text': 'Dialysis | TPN | NPO', 'type': 'Dark Green', count: [45, 111, 35], },
        { 'text': 'Dressing Change & Skin Care', 'type': 'Gray', count: [10, 19, 9], },
        { 'text': 'Echocardiogram', 'type': 'Glow in the Dark', count: [13, 17, 2], },
        { 'text': 'Emergency | Unusual Occurrence | Seizure | Cardio Version | Emergency Transport', 'type': 'Magenta', count: [7, 14, 1], },
        { 'text': 'Isolation Precautions | Fever | Neutropenia', 'type': 'Lime', count: [4, 0, 0], },
        { 'text': 'IV Infusions', 'type': 'Purple', count: [51, 111, 35], },
        { 'text': 'Learning New Medications | Parent Education', 'type': 'White', count: [0, 19, 11], },
        { 'text': 'Nutrition & Diet Transitions', 'type': 'Beige', count: [13, 29, 12], },
        { 'text': 'Overnight Stay in Hospital', 'type': 'Yellow', count: [60, 111, 35], },
        { 'text': 'Pokes', 'type': 'Black', count: [63, 50, 23], },
        { 'text': 'Procedures', 'type': 'Tortoise', count: [5, 5, 1], },
        { 'text': 'Respiratory Support | Sedation | Anesthesia | Ventilator', 'type': 'Pink', count: [60, 111, 35], },
        { 'text': 'Test | Scans', 'type': 'Light Green', count: [113, 143, 30], },
        { 'text': 'Therapy', 'type': 'Rainbow', count: [16,69,10], },
        { 'text': 'Transfusions | Blood Products | Pheresis', 'type': 'Red', count: [5, 39, 3], },
        { 'text': 'Tube | Catheter | Pacer Wife Placement & Removal', 'type': 'Aqua', count: [38, 108, 39], },
        { 'text': 'Act of Courage', 'type': 'Handmade Glass Selection', count: [8,18,4], },
        { 'text': 'Cardiac Surgery', 'type': 'Silver Square Heart', count: [1,2,0], },
        { 'text': 'ECMO', 'type': 'Small Round Fimo', count: [0,0,0], },
        { 'text': 'General Surgery | Suture Removal | Staple Removal | Prolonged Chest Closure', 'type': 'Silver Star', count: [2,3,2], },
        { 'text': 'Heart Transplant', 'type': 'Handmade Glass Heart', count: [0,0,0], },
        { 'text': 'Independent Self or Parent Giving Instructions or Injections | Following Medicine Schedule', 'type': 'Ceramic Special Selection', count: [0,6,0], },
        { 'text': 'Special Accomplishment | Recognition of Personal or Family Accomplishment', 'type': 'Ceramic Special Selection', count: [3,10,3], },
        { 'text': 'Medication Challenges', 'type': 'Bumpy', count: [0,10,0], },
        { 'text': 'Mobility Challenges', 'type': 'Bumpy', count: [0,26,0], },
        { 'text': 'Pacemaker and/or Defibrillator Placement', 'type': 'Lightning Bolt', count: [0, 0, 0], },
        { 'text': 'Parent or Caregiver "Firsts" with Newborn Infants', 'type': 'Small Glass Hearts', count: [0, 15, 0], },
        { 'text': 'Transfer Units or Facilities | Long Distance Travel for Care | "Upstream Battles" ', 'type': 'Fish', count: [1, 2, 1], },
        { 'text': 'Discharge from Hospital', 'type': 'Member\'s Choice', count: [2, 0, 1], },
      ],

      beads: [
        { id: '1a.png', day: true, date: '2020/09/08', text: 'I was diagnosed with a single kidney and HLHS at 22wks gestation \r\n\r\n I was born in a room of about 30 people\r\n\r\nI needed an immediate cardiac catheterisation to open a restrictive valve in my heart\r\n\r\nI aspirated my meconium (inhaled my poop)\r\n\r\nI didn\'t get to meet or even see my parents\r\n\r\nI was whisked away within seconds of leaving my mommy\'s belly', image: '' },
        { id: '1b.png', day: false, date: '2020/09/08', text: '', image: '' },
        { id: '1c.png', day: true, date: '2020/09/09', text: 'My mommy held me for the first time', image: '' },
        { id: '2a.png', day: true, date: '2020/09/10', text: 'My daddy held me for the first time', image: '' },
        { id: '2c.png', day: true, date: '2020/09/11', text: 'I needed my first non-OR blood transfusion', image: '' },
        { id: '3a.png', day: true, date: '2020/09/13', text: '', image: '' },
        { id: '3b.png', day: false, date: '2020/09/13', text: 'Doctors thought I had an infection \r\n\r\n I had 2 failed spinal taps\r\n\r\nI didn\'t have an infection', image: '' },
        { id: '3c.png', day: true, date: '2020/09/14', text: 'I had my first major open-heart surgery - the Norwood', image: '' },
        { id: '3d.png', day: true, date: '2020/09/16', text: 'Doctors left my sternum open after surgery to allow my chest to swell\r\n\r\n I had it closed today', image: '' },
        { id: '3e.png', day: true, date: '2020/09/20', text: 'The chest tube doctors placed to drain fluid was removed today', image: '' },
        { id: '4a.png', day: false, date: '', text: '', image: '' },
        { id: '4b.png', day: false, date: '', text: '', image: '' },
        { id: '4c.png', day: true, date: '2020/09/21', text: 'I had my breathing tube removed\r\n\r\n I let out my first cry\r\n\r\n I had my first suck on a pacifier\r\n\r\n I was diagnosed with hyperinsulemia\r\n\r\n I had my first therapy session', image: '' },
        { id: '5a.png', day: true, date: '2020/09/22', text: 'My mommy and daddy held me for the first time since my Norwood heart surgery', image: '' },
        { id: '5b.png', day: true, date: '2020/09/23', text: 'Doctors found my 2nd kidney\r\n\r\n it was behind my pelvis\r\n\r\n it doesn\'t work that well, though \r\n\r\n It\'s my mommy\'s and daddy\'s anniversary', image: '' },
        { id: '5c.png', day: false, date: '', text: '', image: '' },
        { id: '5d.png', day: true, date: '2020/09/25', text: 'My sodium dropped dangerously low (113)', image: '' },
        { id: '6a.png', day: false, date: '', text: '', image: '' },
        { id: '6b.png', day: false, date: '2020/09/25', text: 'I had an arterial line removed\r\n\r\nI had my first skin-to-skin 😌 ', image: '' },
        { id: '7a.png', day: true, date: '2020/09/27', text: 'I took my first breaths off the ventilator since my heart surgery', image: '' },
        { id: '7b.png', day: false, date: '2020/09/27', text: 'I had my first tummy time\r\n\r\nmy mommy and daddy pushed my meds for the first time', image: '' },
        { id: '8a.png', day: true, date: '2020/09/28', text: 'I took my first breaths without any oxygen support\r\n\r\n I breathed the same air as my mommy and daddy \r\n\r\nI got diagnosed with hip dysplasia\r\n\r\nI drank 1ml of my mom\'s breast milk - yummy!', image: '' },
        { id: '8b.png', day: true, date: '2020/09/29', text: 'I was diagnosed with hypotonia\r\n\r\nI was prematurey diagnosed with a tethered spinal cord\r\n\r\nI left the PCICU for the first time to have an x-ray under contrast to test my kidneys\r\n\r\nmy pacer wire was removed', image: '' },
        { id: '9a.png', day: true, date: '2020/10/01', text: 'I had my first MRI and it showed I had a small brain bleed\r\n\r\nIt was my first day without fentanyl since my heart surgery\r\n\r\nIt was the first time wearing my hip brace', image: '' },
        { id: '9b.png', day: true, date: '2020/10/02', text: 'My scar wasn\'t healing, I had my first Acell treatment to help my wound heal faster', image: '' },
        { id: '9c.png', day: true, date: '2020/10/03', text: 'I had low sodium (115)\r\n\r\nI had more blood transfusions\r\n\r\nI needed more oxygen support', image: '' },
        { id: '10a.png', day: true, date: '2020/10/04', text: 'I needed my first tylenol/paracetamol', image: '' },
        { id: '10b.png', day: true, date: '2020/10/07', text: 'I had my 2nd MRI', image: '' },
        { id: '10c.png', day: true, date: '2020/10/08', text: 'Doctors discovered I had a potential neuroblastoma - a cancer on my adrenal gland', image: '' },
        { id: '11a.png', day: false, date: '2020/10/08', text: 'I needed more oxygen support', image: '' },
        { id: '11b.png', day: true, date: '2020/10/09', text: 'I had my 3rd MRI', image: '' },
        { id: '11c.png', day: true, date: '2020/10/11', text: 'I smiled for the firs time 🥰', image: '' },
        { id: '12a.png', day: true, date: '2020/10/14', text: 'I had another scan on my brain bleed', image: '' },
        { id: '12b.png', day: true, date: '2020/10/15', text: 'Doctors discovered my neuroblastoma was benign', image: '' },
        { id: '13a.png', day: true, date: '2020/10/17', text: 'I required less oxygen support', image: '' },
        { id: '13b.png', day: true, date: '2020/10/18', text: 'I wasn\'t growing a lot, so doctors increased my feeds', image: '' },
        { id: '14a.png', day: true, date: '2020/10/19', text: 'Speech therapy helped me take 5ml of breast milk by bottle - yummy!', image: '' },
        { id: '14b.png', day: true, date: '2020/10/23', text: 'I had an IV line removed from my arm\r\n\r\nbut I had another placed in my foot 😅', image: '' },
        { id: '15b.png', day: false, date: '2020/10/23', text: 'My oxygen support was lowered\r\n\r\nI was breathing room air again!', image: '' },
        { id: '15c.png', day: false, date: '', text: '', image: '' },
        { id: '16a.png', day: false, date: '', text: '', image: '' },
        { id: '17a.png', day: false, date: '', text: '', image: '' },
        { id: '17b.png', day: true, date: '2020/10/29', text: 'I needed more oxygen support', image: '' },
        { id: '18a.png', day: false, date: '', text: '', image: '' },
        { id: '18b.png', day: false, date: '', text: '', image: '' },
        { id: '18c.png', day: true, date: '2020/11/03', text: 'Mommy and daddy washed my hair for the first time!', image: '' },
        { id: '18d.png', day: false, date: '2020/11/03', text: 'I had an x-ray with contrast to check on my intestines', image: '' },
        { id: '19a.png', day: true, date: '2020/11/04', text: 'I was diagnosed with malrotation', image: '' },
        { id: '19b.png', day: true, date: '2020/11/07', text: 'I still wasn\'t growing as fast as I should\r\n\r\n I had my first dose of IV fat lipids!', image: '' },
        { id: '19c.png', day: false, date: '', text: '', image: '' },
        { id: '20a.png', day: true, date: '2020/11/12', text: 'My mommy, daddy, and I had our blood tested to check for any genetic conditions (an exome test)', image: '' },
        { id: '20b.png', day: false, date: '2020/11/12', text: 'I wasn\'t growing as fast as I should, so doctors increased my feeds!', image: '' },
        { id: '21a.png', day: true, date: '2020/11/19', text: 'Getting fed into my stomach upsets me\r\n\r\nI had a feeding tube placed in my nose, through my stomach, and into my small intestine (NJ tube). ', image: '' },
        { id: '21b.png', day: true, date: '2020/11/23', text: 'I stopped taking dexmedetomidine (a strong seditive)', image: '' },
        { id: '21c.png', day: false, date: '', text: '', image: '' },
        { id: '21d.png', day: true, date: '2020/11/28', text: 'I stopped breathing for a few seconds.\r\n\r\nI turned blue\r\n\r\na nurse had to press the emergency button\r\n\r\nwhich brought my all nurse/doctor friends into my room', image: '' },
        { id: '22a.png', day: true, date: '2020/11/29', text: 'I held my breath again\r\n\r\nI turned blue\r\n\r\ my dad had to press the emergency button\r\n\r\n I got to see all my friends at the same time, again', image: '' },
        { id: '22b.png', day: true, date: '2020/12/06', text: 'I got to meet my grandma for the first time! 👵', image: '' },
        { id: '22c.png', day: true, date: '2020/12/07', text: 'My heart rate wouldn\'t slow down\r\n\r\nit was in the 200s for a few hours\r\n\r\neven while I slept', image: '' },
        { id: '23a.png', day: true, date: '2020/12/09', text: 'I had MCT oil added to my feed\r\n\r\nI need to grow some more!', image: '' },
        { id: '23b.png', day: false, date: '2020/12/09', text: 'My exome/DNA tests back, I was diagnosed with Kabuki (queen) syndrome\r\n\r\nKabuki syndrome is a rare, multisystem disorder characterized by multiple abnormalities and a wide variety of additional symptoms affecting multiple different organ systems.', image: '' },
        { id: '24a.png', day: true, date: '2020/12/11', text: 'I coughed up my NJ tube - it had to be placed again :(', image: '' },
        { id: '24b.png', day: true, date: '2020/12/15', text: 'I had a catheterisation procedure to check if I was ready for my 2nd major heart surgery\r\n\r\nI was ready!', image: '' },
        { id: '25a.png', day: true, date: '2020/12/28', text: 'I had my 2nd heart major heart surgery - the Glenn!', image: '' },
        { id: '25b.png', day: false, date: '', text: '', image: 'I came back from surgery' },
        { id: '26a.png', day: false, date: '2020/12/28', text: 'with no breathing tube', image: '' },
        { id: '26b.png', day: false, date: '2020/12/28', text: 'but I was bleeding more than normal..', image: '' },
        { id: '27a.png', day: false, date: '2020/12/28', text: 'I needed an emergency bed-side surgery to fix a leaky artery\r\n\r\nI had to be intubated, again', image: '' },
        { id: '28a.png', day: false, date: '2020/12/28', text: 'My heart surgeon opened my freshly-stitched chest wall to fix the tear', image: '' },
        { id: '29a.png', day: false, date: '2020/12/28', text: 'I lost a lot of blood\r\n\r\nIt was very scary', image: '' },
        { id: '29b.png', day: false, date: '2020/12/28', text: 'I lost twice the volume of blood in my body', image: '' },
        { id: '29c.png', day: true, date: '2020/12/30', text: 'I had my breathing tube removed', image: '' },
        { id: '29d.png', day: true, date: '2020/12/31', text: 'My parents held me for the first time since my 2nd major heart surgery!', image: '' },
        { id: '29e.png', day: true, date: '2021/01/01', text: 'I welcomed the new year with my mommy and daddy & my nurse friends!', image: '' },
        { id: '30a.png', day: true, date: '2021/01/02', text: 'I had my chest tube removed!\r\n\r\nI pooped explosively... I had to have my hair resucitated (washed)', image: '' },
        { id: '30b.png', day: true, date: '2021/01/04', text: 'I coughed up my feeding tube and had to have it placed again :(', image: '' },
        { id: '30c.png', day: true, date: '2021/01/05', text: 'I needed less oxygen support\r\n\r\nI was now on a regular oxygen cannular', image: '' },
        { id: '31a.png', day: true, date: '2021/01/06', text: 'I had a transthoracic line removed!', image: '' },
        { id: '31b.png', day: true, date: '2021/01/08', text: 'I needed less oxygen support!', image: '' },
        { id: '31c.png', day: true, date: '2021/01/10', text: 'Dad pulled out a femoral artery IV line :(', image: '' },
        { id: '32a.png', day: true, date: '2021/01/11', text: 'My mom and dad played with me on the floor for the first time!', image: '' },
        { id: '32b.png', day: true, date: '2021/01/17', text: 'My blood pressure got really low', image: '' },
        { id: '32c.png', day: true, date: '2021/01/21', text: 'I had another surgery\r\n\r\nI had a feeding tube placed directly into my stomach\r\n\r\n...no more tube in my nose!\r\n\r\n Doctors also fixed my malrotation and removed my appendix (LADDs procedure)', image: '' },
        { id: '33a.png', day: true, date: '2021/01/22', text: 'I had my first poop since the LADDs procedure!', image: '' },
        { id: '33b.png', day: true, date: '2021/01/24', text: 'I stopped drinking pedialite and got to drink my mommy\'s breast milk again - yum!\r\n\r\nMy parents held me for the first time since my LADDs procedure', image: '' },
        { id: '34a.png', day: true, date: '2021/01/28', text: 'I was well enough to leave the ICU, and was moved to a step down unit!', image: '' },
        { id: '34b.png', day: true, date: '2021/01/29', text: 'My mommy and daddy prepared all my daily medications on their own for the first time', image: '' },
        { id: '34c.png', day: true, date: '2021/01/30', text: 'My mommy and daddy took care of me for 48 hours in the hospital, without assistance\r\n\r\nThey were ready to take me home!', image: '' },
        { id: '35a.png', day: true, date: '2021/02/01', text: 'I failed my hearing test :(\r\n\r\nI have moderate/severe hearing loss and will need hearing aids', image: '' },
        { id: '35b.png', day: false, date: '2021/02/01', text: 'I blocked my feeding tube\r\n\r\nDiet Coke cleared the blockage and saved the day!', image: '' },
        { id: '35c.png', day: false, date: '2021/02/01', text: '...and..', image: '' },
        { id: '35d.png', day: false, date: '2021/02/01', text: 'I GOT TO GO HOME!\r\n\r\nI met my fur-brother\r\n\r\nI saw Lake Michigan for the first time.\r\n\r\nI met my family', image: '' },
        { id: '35e.png', day: true, date: '2021/02/17', text: 'Not for long, through\r\n\r\nI aspirated at home, and de-saturated enough to be rushed to the ER\r\n\r\nI was immediately admitted to the PCICU... again', image: '' },
        { id: '35f.png', day: true, date: '2021/02/19', text: 'I needed a lot of oxygen support\r\n\r\n12L/min of oxygen to be exact\r\n\r\nI narrowly avoided being intubated', image: '' },
        { id: '35g.png', day: true, date: '2021/02/20', text: 'I have very small veins/arteries\r\n\r\nDoctors have a hard time placing lines', image: '' },
        { id: '36a.png', day: true, date: '2021/02/21', text: 'I pulled out my arm IV\r\n\r\nI pulled out my thumb IV', image: '' },
        { id: '36b.png', day: true, date: '2021/02/22', text: 'I needed less oxygen support\r\n\r\nI was now on 6L/min of oxygen', image: '' },
        { id: '36c.png', day: true, date: '2021/02/25', text: 'Doctors needed better access to my blood (I kept pulling my IVs out)\r\n\r\nThey placed a central line', image: '' },
        { id: '36d.png', day: true, date: '2021/02/26', text: 'I suddenly deteriorated\r\n\r\nI needed to be nasally intubated\r\n\r\nDoctors discovered I had a deviated septum\r\n\r\nIt was my daddy\'s birthday', image: '' },
        { id: '36e.png', day: true, date: '2021/03/01', text: 'I had another cardiac catheterisation procedure to check why I deteriorated and needed so much support.\r\n\r\nI got diagnosed with pulmonary stenosis', image: '' },
        { id: '36f.png', day: true, date: '2021/03/03', text: 'I had pulmonary stenosis surgery', image: '' },
        { id: '37a.png', day: true, date: '2021/03/05', text: 'I was extubated!\r\n\r\nBeing intubated is not good for my heart\'s new circulaion', image: '' },
        { id: '37b.png', day: true, date: '2021/03/06', text: 'I developed a yeast infection :(', image: '' },
        { id: '37c.png', day: true, date: '2021/03/08', text: 'I turned 6 months old!', image: '' },
        { id: '37d.png', day: false, date: '', text: '', image: '' },
        { id: '38a.png', day: true, date: '2021/03/10', text: 'I had another MRI on my spinal cord', image: '' },
        { id: '38b.png', day: false, date: '', text: '', image: '' },
        { id: '39a.png', day: true, date: '2021/03/15', text: 'I had an EEG brain scan', image: '' },
        { id: '39b.png', day: false, date: '', text: '', image: '' },
        { id: '39c.png', day: false, date: '', text: '', image: '' },
        { id: '40a.png', day: true, date: '2021/03/16', text: 'I had another surgery to move my feeding tube to feed my small intestine', image: '' },
        { id: '40b.png', day: false, date: '2021/03/16', text: 'I was one of the first patients to try a new size of stomach feeding tube 🌎', image: '' },
        { id: '40c.png', day: false, date: '2021/03/16', text: 'I had tubes placed in my ears to help drain any fluid\r\n\r\nI had moulds made for hearing aids!', image: '' },
        { id: '40d.png', day: true, date: '2021/03/18', text: 'I needed less oxygen support', image: '' },
        { id: '41a.png', day: true, date: '2021/03/19', text: 'I had a CT scan', image: '' },
        { id: '41b.png', day: true, date: '2021/03/21', text: 'I needed less oxygen support\r\n\r\nI am down to 1/2L now', image: '' },
        { id: '42a.png', day: false, date: '', text: '', image: '' },
        { id: '42b.png', day: false, date: '', text: '', image: '' },
        { id: '43a.png', day: true, date: '2021/03/25', text: 'I went home again!', image: '' },
        { id: '44a.png', day: false, date: '', text: '', image: '' },
        { id: '44b.png', day: true, date: '2021/04/06', text: 'I got admitted to the ICU... again :(\r\n\r\n this time because my sodium was low (115)', image: '' },
        { id: '45a.png', day: true, date: '2021/04/08', text: 'I got my hearing aids!', image: '' },
        { id: '45b.png', day: true, date: '2021/04/10', text: 'I needed better access\r\n\r\nDoctors found out I had no more viable IV sites\r\n\r\nso they placed a central line in my neck\r\n\r\n I was not a happy', image: '' },
        { id: '45c.png', day: true, date: '2021/04/11', text: 'I had my diuretics held\r\n\r\n It made me really puffy\r\n\r\nI needed to pee off a lot of fluid', image: '' },
        { id: '45d.png', day: true, date: '2021/04/20', text: '... and I did!', image: '' },
        { id: '46a.png', day: false, date: '2021/04/20', text:  'I got discharged again!', image: '' },
        { id: '47a.png', day: false, date: '', text: '', image: '' },
        { id: '47b.png', day: false, date: '', text: '', image: '' },
        { id: '48a.png', day: false, date: '', text: '', image: '' },
        { id: '48b.png', day: true, date: '2021/04/29', text: 'My mommy and daddy took me to a routine check-up\r\n\r\nDoctors told my parents my lungs were very cloudy\r\n\r\nI was having trouble breathing' , image: ''},
        { id: '49a.png', day: false, date: '2021/04/29', text: 'I was admitted to the PCICU\r\n\r\n...again...\r\n\r\nMy 4th and final admission, this time because of my narrow veins, my lungs weren\'t able to drain my blood quick enough', image: '' },
        { id: '50a.png', day: true, date: '2021/05/01', text: 'I developed chlothorax\r\n\r\nI had a chest tube placed to drain the extra cyle/fluid around my lungs', image: '' },
        { id: '50b.png', day: true, date: '2021/05/03', text: 'I deteriorated and needed to be intubated\r\n\r\nI had another catheterisation procedure to find out why I got sick\r\n\r\n...again...', image: '' },
        { id: '51a.png', day: true, date: '2021/05/06', text: 'Doctors tried to remove my breathing tube\r\n\r\nbut I wasn\'t strong enough without it', image: '' },
        { id: '51b.png', day: true, date: '2021/05/07', text: 'My lungs were very sick from the chlothorax and extra volume\r\n\r\nand I an started extreme course of antibiotics', image: '' },
        { id: '51c.png', day: true, date: '2021/05/10', text: 'I had a very difficult night\r\n\r\nMy lungs were really, really sick\r\n\r\nI waited for my parents to arrive in the morning\r\n\r\n I decided I was ready\r\n\r\nI went into cardiac arrest and I was resuscitated with CPR and epinetherin\r\n\r\nCPR broke some of my ribs\r\n\r\nI was kept alive by the ventilator until the following day\r\n\r\nMy parents knew I was not coming back\r\n\r\nThey made the brave decision to turn off my ventilator\r\n\r\nI took my last breath at 9:22am, peacefully, in the arms of my mommy and daddy, surrounded by my family\r\n\r\nI am now forever at peace', image: '' },
        { id: 'customa', day: true, date: '2021/05/18', text: 'Sterling was cremated, and some of her ashes were placed in the soil we used to plant a redbud tree.', image: '' },
        { id: 'customb', day: true, date: '2036/05/18', text: 'We watered her & we still got to watch her grow into something else equally as beautiful.', image: '' }
      ],
    };
  },
  mounted () {
    this.updateMusicStatus();

    this.$nextTick(() => {
        this.setupParallax();
    });

    if (process.browser) {
      const urlSearchParams = new URLSearchParams(window.location.search);
      const { noappeal } = Object.fromEntries(urlSearchParams.entries());

      if (typeof noappeal === 'undefined') {
        this.appeal = false;
      }

      this.music.stopped = true;
      this.music.playlist = [
        new Audio('/a/pretty-pretty-blue-eyes.mp3'),
        new Audio('/a/speak-softly-sterling.mp3'),
        new Audio('/a/you-made-us-so-very-happy.mp3')
      ];
    }
  },
  computed: {
    now() {
      return moment().format('MMMM Do YYYY');
    },
    csssupport() {
      if (process.browser) {
        return {
          'cssmask': document.body.style[ '-webkit-mask-repeat' ] !== undefined,
        }
      }
      return { 'cssmask': false };
    },
    totals() {
      let beads = 0;
      for(let i = 0; i < this.counts.length; i++) {
        beads += this.counts[i].count.reduce((p, a) => p + a, 0)
      }

      return { beads };
    }
  },
  methods: {
    updateMusicStatus() {
      const self = this;

      try {
        self.music.stopped = ! self.music.stopped;

        const audio = self.music.playlist[self.music.playing];

        audio.onended = function() {
          self.music.playing = ( self.music.playing === self.music.playlist.length -1 ? 0 : self.music.playing + 1);
          const next = self.music.playlist[self.music.playing];
          next.play();
        };

        if (self.music.stopped === true) {
          audio.pause();
          audio.currentTime = 0;
          self.music.playing = ( self.music.playing === self.music.length ? 0 : self.music.playing + 1);
          return;
        }

        audio.play();
      } catch (error) {
        self.music.stopped = ! self.music.stopped;
        self.music.playing = 0;
      }
    },
    nl2br (text) {
      return text.replace(/\r\n/g, '<br/>');
    },

    getDaySinceBirthText (date) {
      return `Day ${this.daysSinceBirth(date)}`;
    },

    daysSinceBirth (to) {
      const from = '2020-09-08';

      return Math.abs(
        moment(from, 'YYYY-MM-DD')
          .startOf('day')
          .diff(moment(to, 'YYYY-MM-DD').startOf('day'), 'days')
      ) + 1 || 0;
    },

    setupParallax () {
      $(document).ready(() => {
        var $window = $(window);

        $('#app').on('scroll', ((e) => {
          $('.topped').removeClass('topped');
        }));

        $('[data-type="background"]').each(() => {
          var $bg = $(this);

          $(window).scroll(() => {

            var yPos = -($window.scrollTop() / $bg.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $bg.css({ backgroundPosition: coords });
          });
        });
      });
    },
  }
}
</script>
