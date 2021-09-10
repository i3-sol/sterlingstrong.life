<template>
  <div id="app">

    <header >
      <a href="#" class="d-inline-block" id="music" @click.prevent="updateMusicStatus()"
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
    </header>

    <section class="vh-100" :id="name" :class="name">
      <div class="container-fluid text-center">
        <div class="row">
          <div class="col-lg-6 about">
            <h2 :class="`${name}__name`">Sterling Nova Lynn Raspe</h2>
            <h3 :class="`${name}__life-dates`">
              8th September 2020<span class="divider"></span>11th May 2021
              <small class="d-block days">
                two hundred &amp; forty-five precious days
              </small>
            </h3>
          </div>
          <div class="col-lg-6" :class="`${name}__obituary`">
            <div :class="`${name}__obituary__inner`">
              <p>"<strong class="text-bigger">Sterling</strong>" comes from the word <em>"steorra"</em>, meaning <strong>star</strong>. The word <em>"nova"</em> means <strong>new</strong>. Sterling Nova. A little star made new and whole in heaven. A <em>nova</em> is when a star's gas builds up and triggers an explosion making it shine up to a <strong>million</strong> times <strong>brighter</strong> than normal.</p>
            </div>
          </div>
        </div>
      </div>
      <img class="pigtails" :src="`i/pigtails.png`" alt="asd">
    </section>

    <section class="parallax vh-100 beads-of-courage" data-type="background" data-speed="10" >
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
        <img class="fullsize__image" :src="`i/test-${i}.png`" alt="asd">
      </div>
    </section>

    <section id="timeline" class="timeline container">
      <div v-for="(b, n) in beads" :key="b.id" class="timeline__item" :id="`section--${b.id}`">
        <div class="timeline__image-holder">
          <img class="timeline__image" :src="`i/export-optimised/${b.id}`" alt="">
        </div>
        <div class="timeline__description-wrapper" >
          <div class="timeline__description" v-if="b.text || b.image">
            <h3 class="timeline__title"
            >
              {{ getDaySinceBirth(b.date) }}
            </h3>
            <h4 class="timeline__date text-muted">
              {{ b.date }}
            </h4>
            <div class="timeline__notes lead">
              <p v-html="nl2br(b.text)"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="vh-100 fullpage-section">
      <div class="container">
        <h2 class="display-4">
          Lorem ipsum dolor sit!
        </h2>
        <p class="lead mw-50">
          Lorem ipsum dolor sit amet consectetur adipisicing, elit. Rem earum, veritatis iure? Laboriosam veniam deleniti unde debitis vero voluptatibus culpa recusandae, consequatur nemo hic tempora, dicta deserunt voluptate quaerat laborum.`
        </p>
      </div>
    </section>

    <div id="ruler-vertical" class="ruler-vertical">
      <svg id="svgV" xmlns="http://www.w3.org/2000/svg" />
    </div>
  </div>
</template>

<script>
import $ from 'jquery';
import moment from 'moment'

export default {
  data () {
    return {
      name: 'sterling',

      music: {
        stopped: false,
        playing: 0,
        playlist: [
          new Audio('/a/pretty-pretty-blue-eyes.mp3'),
          new Audio('/a/speak-softly-sterling.mp3'),
          new Audio('/a/you-made-us-so-very-happy.mp3')
        ],
      },

      dates: [],

      beads: [
        { id: '1a.png', date: '2020/09/08', text: 'Born\r\nmcononium aspiration', image: '' },
        { id: '1b.png', date: '2020/09/08', text: 'cath procedure', image: '' },
        { id: '1c.png', date: '2020/09/09', text: 'mom\'s first hold', image: '' },
        { id: '2a.png', date: '2020/09/10', text: 'dad\'s first hold', image: '' },
        { id: '2c.png', date: '2020/09/11', text: '1st blood transfusion', image: '' },
        { id: '3a.png', date: '2020/09/13', text: '', image: '' },
        { id: '3b.png', date: '2020/09/13', text: '2 failed spinal taps', image: '' },
        { id: '3c.png', date: '2020/09/14', text: 'Norwood Heart Surgery', image: '' },
        { id: '3d.png', date: '2020/09/16', text: 'Sternum closure', image: '' },
        { id: '3e.png', date: '2020/09/20', text: 'Chest tube removed', image: '' },
        { id: '4a.png', date: '', text: '', image: '' },
        { id: '4b.png', date: '', text: '', image: '' },
        { id: '4c.png', date: '2020/09/21', text: 'breathing tube removed\r\nfirst cry\r\nfirst pacifier\r\ndiagnosed hyperinsulemia\r\nfirst therapy session', image: '' },
        { id: '5a.png', date: '2020/09/22', text: 'mom & dad\'s first hold since Norwood', image: '' },
        { id: '5b.png', date: '2020/09/23', text: 'Drs found my 2nd kidney\r\nMy mom and dad\'s anniversary', image: '' },
        { id: '5c.png', date: '', text: '', image: '' },
        { id: '5d.png', date: '2020/09/25', text: 'my sodium dropped to 113', image: '' },
        { id: '6a.png', date: '', text: '', image: '' },
        { id: '6b.png', date: '2020/09/25', text: 'arterial line removed\r\nfirst skin-to-skin', image: '' },
        { id: '7a.png', date: '2020/09/27', text: 'I took my first breaths of the ventilator since my heart surgery', image: '' },
        { id: '7b.png', date: '2020/09/27', text: 'My first tummy time\r\nmy mom and dad pushed my meds for the first time\r\n', image: '' },
        { id: '8a.png', date: '2020/09/28', text: 'I took my first breathes without oxygen support\r\nI got diagnosed with hip dysplasia\r\nI drank 1ml of my mom\'s breast milk', image: '' },
        { id: '8b.png', date: '2020/09/29', text: 'I was diagnosed with hypotonia\r\nI was prematurey diagnosed with a tethered spinal cord\r\nI left the PCICU for the first time to have an x-ray under contrast to test for kidney reflux\r\nmy pacemaker line was removed', image: '' },
        { id: '9a.png', date: '2020/10/01', text: 'I had my first MRI and it showed I had a small brain bleed\r\nIt was my day without fentanyl since my heart surgery.\r\nIt was the first time wearing my hip brace', image: '' },
        { id: '9b.png', date: '2020/10/02', text: 'first Acell treatment', image: '' },
        { id: '9c.png', date: '2020/10/03', text: 'I had low sodium (115)\r\nI had more blood transfusions\r\nI needed more oxygen support', image: '' },
        { id: '10a.png', date: '2020/10/04', text: 'I needed my first tylenol', image: '' },
        { id: '10b.png', date: '2020/10/07', text: 'I had my 2nd MRI', image: '' },
        { id: '10c.png', date: '2020/10/08', text: 'Doctors discovered I had a potential neuroblastoma - a cancer of the adrenal glands', image: '' },
        { id: '11a.png', date: '2020/10/08', text: 'I needed more oxygen support', image: '' },
        { id: '11b.png', date: '2020/10/09', text: 'I had my 3rd MRI', image: '' },
        { id: '11c.png', date: '2020/10/11', text: 'I smiled for the firs time :)', image: '' },
        { id: '12a.png', date: '2020/10/14', text: 'I had another CT scan on my brain bleed', image: '' },
        { id: '12b.png', date: '2020/10/15', text: 'Doctors discovered my neuroblastoma was benign', image: '' },
        { id: '13a.png', date: '2020/10/17', text: 'I required less oxygen support', image: '' },
        { id: '13b.png', date: '2020/10/18', text: 'I wasn\'t growing a lot, so doctors increase my feeds', image: '' },
        { id: '14a.png', date: '2020/10/19', text: 'Speech therapy helped me take 5ml of breast milk by bottle - yummy!', image: '' },
        { id: '14b.png', date: '2020/10/23', text: 'I had a line removed from my arm\r\nI had another line placed in my foot', image: '' },
        { id: '15b.png', date: '2020/10/23', text: 'My oxygen support was lowered, and I was breating room air again!', image: '' },
        { id: '15c.png', date: '', text: '', image: '' },
        { id: '16a.png', date: '', text: '', image: '' },
        { id: '17a.png', date: '', text: '', image: '' },
        { id: '17b.png', date: '2020/10/29', text: 'I needed more oxygen support', image: '' },
        { id: '18a.png', date: '', text: '', image: '' },
        { id: '18b.png', date: '', text: '', image: '' },
        { id: '18c.png', date: '2020/11/03', text: 'I had my hair washed for the first time!', image: '' },
        { id: '18d.png', date: '2020/11/03', text: 'I had x-ray with contrast on my intestines', image: '' },
        { id: '19a.png', date: '2020/11/04', text: 'I was diagnosed with malrotation', image: '' },
        { id: '19b.png', date: '2020/11/07', text: 'I still wasn\'t growing as fast as I should, so I had my first dose of fat lipids!', image: '' },
        { id: '19c.png', date: '', text: '', image: '' },
        { id: '20a.png', date: '2020/11/12', text: 'My mom, dad, and I had our blood tested to check for any genetic conditions (an exome test)', image: '' },
        { id: '20b.png', date: '2020/11/12', text: 'I wasn\'t growing as fast as I should, so doctors increased my feeds!', image: '' },
        { id: '21a.png', date: '2020/11/19', text: 'Getting fed into my stomach upsets me. I had a feeding tube placed in my nose, through my stomach, and into my small intestine (NJ tube). ', image: '' },
        { id: '21b.png', date: '2020/11/23', text: 'I stopped taking dexmedetomidine (a strong seditive)', image: '' },
        { id: '21c.png', date: '', text: '', image: '' },
        { id: '21d.png', date: '2020/11/28', text: 'I stopped breathing for a few seconds. I turned blue, and a nurse had to press the emergency button, which brought my all nurse-friends into my room', image: '' },
        { id: '22a.png', date: '2020/11/29', text: 'I held my breath again, turned blue, and my dad had to press the emergency button, I got to see all my friends at the same time, again.', image: '' },
        { id: '22b.png', date: '2020/12/06', text: 'I got to meet my grandma for the first time!', image: '' },
        { id: '22c.png', date: '2020/12/07', text: 'My heart rate wouldn\'t slow down, and was in the 200s for a few hours', image: '' },
        { id: '23a.png', date: '2020/12/09', text: 'I had MCT oil added to my feed, I need to grow some more!', image: '' },
        { id: '23b.png', date: '2020/12/09', text: 'My exome/DNA tests back, I was diagnosed with Kabuki (queen) syndrome', image: '' },
        { id: '24a.png', date: '2020/12/11', text: 'I coughed up my NJ tube - it had to be placed again :(', image: '' },
        { id: '24b.png', date: '2020/12/15', text: 'I had a cath procedure to check if I was ready for my 2nd heart surgery', image: '' },
        { id: '25a.png', date: '2020/12/28', text: 'I had my 2nd heart major heart surgery, the Glenn!', image: '' },
        { id: '25b.png', date: '', text: '', image: '' },
        { id: '26a.png', date: '2020/12/28', text: 'I came back from surgery, with no breathing tube, but I was bleeding more than normal...', image: '' },
        { id: '26b.png', date: '2020/12/28', text: 'Doctors discovered a small artery tear...', image: '' },
        { id: '27a.png', date: '2020/12/28', text: 'I needed an emergency bed-side surgery to fix the tear... I had to be intubated, again...', image: '' },
        { id: '28a.png', date: '2020/12/28', text: 'My heart surgeon opened my freshly-stitched chest wall to fix the tear...', image: '' },
        { id: '29a.png', date: '2020/12/28', text: 'I lost a lot of blood...', image: '' },
        { id: '29b.png', date: '2020/12/28', text: 'Twice the volume of blood in my body, to be exact', image: '' },
        { id: '29c.png', date: '2020/12/30', text: 'I had my breathing tube removed', image: '' },
        { id: '29d.png', date: '2020/12/31', text: 'My parents held me for the first time since my heart surgery!', image: '' },
        { id: '29e.png', date: '2021/01/01', text: 'I welcomed the new year with my mom and dad!', image: '' },
        { id: '30a.png', date: '2021/01/02', text: 'I had my chest tube removed! I pooped so explosively, I had to have my hair washed!', image: '' },
        { id: '30b.png', date: '2021/01/04', text: 'I coughed up my feeding tube and had to have it placed again :(', image: '' },
        { id: '30c.png', date: '2021/01/05', text: 'I needed less oxygen support - I was now on a regular oxygen cannular', image: '' },
        { id: '31a.png', date: '2021/01/06', text: 'I had my transthoracic line removed!', image: '' },
        { id: '31b.png', date: '2021/01/08', text: 'I neeed less oxygen support!', image: '' },
        { id: '31c.png', date: '2021/01/10', text: 'Dad pulled out my femoral artery IV line :(', image: '' },
        { id: '32a.png', date: '2021/01/11', text: 'My mom and dad played with me on the floor for the first time!', image: '' },
        { id: '32b.png', date: '2021/01/17', text: 'My blood pressure got really low', image: '' },
        { id: '32c.png', date: '2021/01/21', text: 'I had a feeding tube placed directly into my stomach - no more tube in my nose! I also had my malrotation fixed, and my appendix removed (LADDs procedure)', image: '' },
        { id: '33a.png', date: '2021/01/22', text: 'I had my first poop since the LADDs procedure!', image: '' },
        { id: '33b.png', date: '2021/01/24', text: 'I stopped drinking pedialite, and got my mom\'s breast milk again - yum!\r\nMy parents held me for the first time since my LADDs procedure.', image: '' },
        { id: '34a.png', date: '2021/01/28', text: 'I was well enough to leave the ICU, and was moved to a step down unit!', image: '' },
        { id: '34b.png', date: '2021/01/29', text: 'Mom and dad prepared all my medications on their own', image: '' },
        { id: '34c.png', date: '2021/01/30', text: 'My mom and dad took care of me for 48 hours in the hospital, without assistance. They were ready to take me home!', image: '' },
        { id: '35a.png', date: '2021/02/01', text: 'I failed my hearing test :(', image: '' },
        { id: '35b.png', date: '2021/02/01', text: 'I blocked my feeding tube... Diet Coke cleared the blockage and saved the day!', image: '' },
        { id: '35c.png', date: '2021/02/01', text: '...and...', image: '' },
        { id: '35d.png', date: '2021/02/01', text: 'I GOT TO GO HOME!', image: '' },
        { id: '35e.png', date: '2021/02/17', text: 'Not for long, through. I aspirated at home, and de-saturated enough to be rushed to the ER, and was immediated admitted the PCICU... again', image: '' },
        { id: '35f.png', date: '2021/02/19', text: 'I needed a lot of oxygen support - 12L/min of oxygen to be exact. I narrowly avoided intubation.', image: '' },
        { id: '35g.png', date: '2021/02/20', text: 'I pulled out my arm IV', image: '' },
        { id: '36a.png', date: '2021/02/21', text: 'I pulled out my thumb IV', image: '' },
        { id: '36b.png', date: '2021/02/22', text: 'I needed less oxygen support. I was now on 6L/min of oxygen.', image: '' },
        { id: '36c.png', date: '2021/02/25', text: 'Doctors needed better access to my blood, and I kept pulling my IVs out, so a central line was placed', image: '' },
        { id: '36d.png', date: '2021/02/26', text: 'I suddenly deteriorated, and needed to be nasally intubated, on my dad\'s birthday\r\nDoctors discovered I had a deviated septum', image: '' },
        { id: '36e.png', date: '2021/03/01', text: 'I had another cath procedure to check why I deteriorated and needed so much support.\r\nI got diagnosed with pulmonary stenosis', image: '' },
        { id: '36f.png', date: '2021/03/03', text: 'I had pulmonary stenosis surgery.', image: '' },
        { id: '37a.png', date: '2021/03/05', text: 'I was extubated! Being intubated is not good for my heart\'s new circulaion.', image: '' },
        { id: '37b.png', date: '2021/03/06', text: 'I developed a yeast infection :(', image: '' },
        { id: '37c.png', date: '2021/03/08', text: 'I turned 6 months old!', image: '' },
        { id: '37d.png', date: '', text: '', image: '' },
        { id: '38a.png', date: '2021/03/10', text: 'I had another MRI on my spinal cord', image: '' },
        { id: '38b.png', date: '', text: '', image: '' },
        { id: '39a.png', date: '2021/03/15', text: 'I had an EEG brain scan', image: '' },
        { id: '39b.png', date: '', text: '', image: '' },
        { id: '39c.png', date: '', text: '', image: '' },
        { id: '40a.png', date: '2021/03/16', text: 'I had another surgery to move my feeding tube to feed my small intestine', image: '' },
        { id: '40b.png', date: '2021/03/16', text: 'I was one of the first patients to try a new size of stomach feeding tube.', image: '' },
        { id: '40c.png', date: '2021/03/16', text: 'I had tubes placed in my ears to drain fluid. I had moulds made for hearing aids!', image: '' },
        { id: '40d.png', date: '2021/03/18', text: 'I needed less oxygen support', image: '' },
        { id: '41a.png', date: '2021/03/19', text: 'I had a CT scan', image: '' },
        { id: '41b.png', date: '2021/03/21', text: 'I needed less oxygen support. Down to 1/2L now', image: '' },
        { id: '42a.png', date: '', text: '', image: '' },
        { id: '42b.png', date: '', text: '', image: '' },
        { id: '43a.png', date: '2021/03/25', text: 'I went home again!', image: '' },
        { id: '44a.png', date: '', text: '', image: '' },
        { id: '44b.png', date: '2021/04/06', text: 'I got admitted to the ICU again for low sodium - 115', image: '' },
        { id: '45a.png', date: '2021/04/08', text: 'I got my hearing aids!', image: '' },
        { id: '45b.png', date: '2021/04/10', text: 'I needed better access, and had no more viable IV places, so doctors placed a central line in my neck', image: '' },
        { id: '45c.png', date: '2021/04/11', text: 'I had my diruetics held, and got puffy as a result. I needed to pee off a lot of fluid.', image: '' },
        { id: '45d.png', date: '2021/04/20', text: '... and I did!', image: '' },
        { id: '46a.png', date: '2021/04/20', text:  'I got discharged again!', image: '' },
        { id: '47a.png', date: '', text: '', image: '' },
        { id: '47b.png', date: '', text: '', image: '' },
        { id: '48a.png', date: '', text: '', image: '' },
        { id: '48b.png', date: '', text: '', image: '' },
        { id: '49a.png', date: '2021/04/29', text: 'My 4th and final admission, this time plural effusion', image: '' },
        { id: '50a.png', date: '2021/05/01', text: 'I developed chlothorax, and had a chest tube placed to drain the extra cyle', image: '' },
        { id: '50b.png', date: '2021/05/03', text: 'I deteriorated and needed to be intubated. I had another cath procedure to find out why I got sick, again.', image: '' },
        { id: '51a.png', date: '2021/05/06', text: 'Doctors tried to remove my breathing tube... but I wasn\'t strong enough without', image: '' },
        { id: '51b.png', date: '2021/05/07', text: 'My lungs were very sick from the chlothorax, and I an started extreme course of antibiotics', image: '' },
        { id: '51c.png', date: '2021/05/10', text: 'I had a very difficult night. My lungs were too sick to recover. I waited for my parents to arrive, and decided I was ready. I went into cardiac arrest. I was resuscitated with CPR and epinetherin. CPR broke some of my ribs. I was kept alive by the ventilator until the following day. My parents knew there was no coming back, and made the heart breaking decision to turn off the ventilator. I took my last breath, peacefully, in my parents arms, surrounded by my family, at 8:22am.', image: '' }
      ],
    };
  },
  mounted () {
    this.updateMusicStatus();

    this.setupParallax();
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
      return text.replace('\r\n', '<br/>')
    },
    getDaySinceBirth (date) {
      return `Day ${this.daysSinceBirth(date)}`;
    },
    daysSinceBirth (to) {
      const from = '2020-09-08';

      return Math.abs(
        moment(from, 'YYYY-MM-DD')
          .startOf('day')
          .diff(moment(to, 'YYYY-MM-DD').startOf('day'), 'days')
      ) + 1;
    },

    setupParallax () {
      $(document).ready(() => {
        var $window = $(window);
        $('[data-type="background"]').each(() => {
          var $bg = $(this);

          $(window).scroll(() => {
            var yPos = -($window.scrollTop() / $bg.data('speed'));
            var coords = '50% '+ yPos + 'px';
            $bg.css({ backgroundPosition: coords });
          });
        });
      });
    }
  }
}
</script>
