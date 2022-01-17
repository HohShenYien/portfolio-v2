<template>
  <div>
    <section class="section" id="section1">
      <h1>2022 Resolutions</h1>
      <div class="sub-text">Updated: <span class="white--text">15 Jan 2022</span></div>
      <div class="content">
        <v-list color="#00000000" class="list-row">
          <v-list-item
            v-for="(item, idx) in resolutions"
            :key="idx"
            class="resolution"
          >
            <v-list-item-icon>
              {{ idx + 1 }}.
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title>
                <div class="resolution-row">
                  <div class="resolution-title">{{ item.name }}</div>
                  <v-spacer/>
                  <div class="resolution-progress" v-if="'progress' in item"> {{ item.progress }}</div>
                </div>
              </v-list-item-title>
              <v-list-item-subtitle class="resolution-description" v-html="item.description"></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </div>
    </section>
    <v-divider style="margin: 0 120px;"></v-divider>
    <section class="section" id="section2">
      <h1>Readings</h1>
      <div class="sub-text">Updated: <span class="white--text">15 Jan 2022</span></div>
      <div class="sub-text">Since <span class="white--text">January 2022</span></div>
      <div class="content">
        <div v-for="(book, idx) in readings" :key="idx">
          <div class="books"
               :class="{[`status-${book.status}`]: true}">
            <div>
              <v-icon
                class="book-status">
                {{
                  book.status == 0 ? 'mdi-checkbox-blank-outline' : book.status == 1 ? 'mdi-minus-box' : 'mdi-checkbox-marked'
                }}
              </v-icon>
            </div>
            <v-tooltip bottom color="#33333366">
              <template v-slot:activator="{ on, attrs }">
                <div class="book-title"
                     v-bind="attrs"
                     v-on="on">
                  {{ book.name }}
                </div>
              </template>
              <span :style="{color:
                    book.status == 0 ? '#FFFFFF' : book.status == 1 ? '#DAA520' : '#FFD700'
              }">
                {{ book.status == 0 ? "Haven't start" : book.status == 1 ? 'Reading now' : 'Completed' }}
            </span>
            </v-tooltip>
          </div>
        </div>
      </div>
    </section>
    <v-divider style="margin: 0 120px;"></v-divider>
    <section class="section" id="section3">
      <h1>WHY?</h1>
      <div>Some said that announcing your goals make you less likely to succeed.</div>
      <div>Personally, when I announce mine, it feels like a pushing factor for me to finish my work since they
        are being judged by others. What matters to me is that it works, so I do it. 🤩
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "goals",
  computed: {},
  data() {
    return {
      resolutions: [
        {
          name: 'At least join 3 hackathons and win 1 of them',
          status: false,
          description: 'I managed to join 2 and won 1 of them last year, so there should be an improvement this year!'
        },
        {
          name: 'Maintain 3.70 CGPA in second year',
          status: false,
          description: 'I hope to maintain a first class for this year as well.'
        },
        {
          name: 'Finish the CLRS book',
          status: false,
          description: "Definitely the toughest book I've ever read, with difficult maths and tough algorithms." +
            "Nevertheless, I have already read half of it, hopefully I can finish the remaining this year."
        },
        {
          name: 'Finish the book "Introduction to Mathematical Statistics"',
          status: false,
          description: ''
        },
        {
          name: 'Learn Node, React & Flutter',
          status: false,
          description: 'At least build 1 project with each of them'
        },
        {
          name: '1 Analysis project per month',
          status: false,
          description: ''
        },
        {
          name: 'Complete setting up my blog',
          status: false,
          description: 'TODO:' +
            '<li>' +
            '<ul>Index page for each content</ul>' +
            '<ul>Post page for each content</ul>' +
            '<ul>Tags & search page</ul>' +
            '<ul>Comment Function </ul>' +
            '</li>'
        },
        {
          name: 'Complete 2 machine learning projects',
          status: false,
          description: ''
        },
        {
          name: 'Complete 3 Machine Learning textbooks / courses',
          status: false,
          description: 'Currently I am following Deep Learning for Coders from' +
            ' <a href="https://course.fast.ai/" target="_blank">fast.ai</a>'
        },
        {
          name: 'Stop playing games',
          status: false,
          description: "I get addicted with games easily, i.e., Tetris, Chess, Super Tux Kart. I hope to get my game" +
            "addictions to be gone and read instead when I'm bored."
        },
        {
          name: 'Read 1 book monthly',
          status: false,
          description: 'A habit that I have been wanting to have.',
          progress: '1 / 12'
        },
        {
          name: "Meditate 30 mins once every 2 weeks",
          status: false,
          description: "I've been meditating on and off since 2014, so I would like to fix a schedule, which is on Saturday" +
            "every two weeks.",
        },
        {
          name: 'Create 6 arts',
          status: false,
          description: 'I have just learned Inkscape early of this year, so I wanna try to draw more using it.',
          progress: '1 / 6'
        },
        {
          name: 'Workout more frequently',
          status: false,
          description: "I have been gaining more weights since last year, so I will wanna workout whenever I'm free."
        },
        {
          name: 'Learn and get fluent with Linux commands and Vim',
          status: false,
          description: 'As a big fan of Linux, I wanna be better with the use of Bash terminal & Vim.'
        },
        {
          name: 'Complete 2 Finance courses / textbooks',
          status: false,
          description: ''
        }
      ],
      readings: [
        // 0 not read, 1 reading, 2 completed
        {
          name: "Don't Make Me Think",
          status: 2,
        },
        {
          name: "The Richest Man in Babylon",
          status: 2,
        },
        {
          name: "Introduction to Statistical Learning",
          status: 1,
        },
        {
          name: "Introduction to Algorithms",
          status: 1,
        },
        {
          name: "How to Decide",
          status: 1,
        },
        {
          name: "The Design of Everyday Things",
          status: 0,
        },
        {
          name: "Introduction to Computing Systems",
          status: 0
        }
      ]
    }
  },
  created() {
    this.readings.sort((a, b) => {
      return a.status - b.status;
    })
  }
}
</script>

<style scoped lang="scss">
.section {
  @include smaller-section;
  min-height: 100vh;

  h1 {
    font-size: 2rem;
    color: $secondary;
    text-transform: uppercase;
    letter-spacing: 3px;
    margin-bottom: 10px;
  }

  .sub-text {
    font-size: 1rem;
    color: gray;
    margin-bottom: 5px;
  }

  .content {
    margin-top: 10px;
  }
}

#section3 {
  min-height: 0;

  div {
    font-size: 1.2rem;
    margin-bottom: 15px;
    padding: 0 16px;
  }
}

#section2 {
  .content {
    column-count: 3;
    column-gap: 20px;
    padding-top: 8px;
  }

  .books {
    display: flex;
    margin: 0 16px 48px;
    font-size: 1.2rem;
    cursor: default;

    &.status-0, &.status-0 i {
      color: $secondary-text;
    }

    &.status-1, &.status-1 i {
      color: $secondary;
    }

    &.status-2, &.status-2 i {
      color: $primary
    }

    .book-title {
      font-weight: bold;
    }

    .book-status {
      margin-right: 12px;
    }
  }
}

.list-row {
  column-count: 2;
  column-gap: 20px;
}

.resolution {
  padding-bottom: 48px;
  min-height: unset;

  .resolution-title {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 8px;
    transition: all 0.2s linear;
    cursor: default;

    &:hover {
      font-size: 1.35rem;
      color: darkgoldenrod;
    }
  }

  .resolution-row {
    display: flex;
    flex-direction: row;
  }

  .resolution-progress {
    color: $random-orange;
  }
}

@media only screen and (max-width: 600px) {
  .list-row {
    column-count: 1;
  }
  #section2 {
    .content {
      column-count: 1;
    }
  }
}

</style>

<style>
.resolution div {
  padding: 0;
}

.resolution .v-list-item__content {
  align-self: flex-start;
}

.resolution .v-list-item__title, .v-list-item__subtitle {
  text-overflow: unset;
  white-space: unset;
}

.v-list-item__icon {
  font-size: 1.2rem;
  margin-right: 10px !important;
  margin-top: -2px;
  margin-bottom: 0;
}

ul {
  margin-bottom: 3px;
}

ul::before {
  content: "⭐";
  display: inline-block;
  margin-right: 1em;
}

</style>