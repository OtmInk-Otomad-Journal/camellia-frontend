<script setup>
import { data } from '../data/MainView_data.js'
</script>

<template>
  <div class="view-box">
    <div class="main-info">
      <h1 class="main-title">{{ data.title }}</h1>
      <div class="details">
        <div class="chips">
          <InfoChip><span v-if="!isNaN(data.aid)">av</span>{{ data.aid }}</InfoChip>
          <InfoChip v-if="data.pubtime">{{ data.pubtime }}</InfoChip>
        </div>
        <UploaderInfo v-if="data.uploader != 'UNCHECKABLE'" />
      </div>
      <div class="main-progress"></div>
    </div>
    <div class="view-point">
      <div>{{ data.score }}<span> 票</span></div>
      <div class="view-sub-count">
        <div class="count-type">
          <svg width="1em" height="1em" viewBox="0 0 137 137" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_223_2)">
              <path
                d="M126.297 105.961V97.2655C115.833 93.6291 108.301 83.6677 108.301 71.9804V65.0207C108.301 53.3332 115.833 43.3718 126.297 39.7351V31.0388H10.7031V105.961H126.297M126.297 116.664H10.7031C9.29737 116.666 7.90508 116.39 6.60631 115.852C5.30755 115.314 4.12791 114.525 3.13523 113.529C2.15756 112.554 1.3785 111.399 0.841285 110.127C0.283443 108.809 -0.00269071 107.392 1.9068e-05 105.961V31.0391C1.9068e-05 29.5942 0.282849 28.1926 0.841017 26.8734C1.37828 25.6015 2.15733 24.446 3.13496 23.4709C4.10987 22.4934 5.26523 21.7145 6.53695 21.1772C7.85491 20.6192 9.27193 20.333 10.7031 20.3357H126.297C127.742 20.3357 129.143 20.6188 130.463 21.177C131.735 21.7142 132.89 22.4932 133.865 23.4707C134.843 24.4457 135.622 25.6013 136.159 26.8732C136.717 28.191 137.003 29.6078 137 31.0388V48.9652H135.058C126.206 48.9652 119.004 56.1676 119.004 65.0205V71.9802C119.004 80.8333 126.206 88.0354 135.058 88.0354H137V105.961C137.003 107.392 136.717 108.809 136.159 110.127C135.622 111.399 134.843 112.554 133.865 113.529C132.872 114.525 131.693 115.314 130.394 115.852C129.095 116.39 127.703 116.666 126.297 116.664V116.664Z"
                fill="url(#paint0_linear_223_2)"
              />
              <path
                d="M32.377 52.4453V84.5547C32.377 85.974 31.8132 87.3352 30.8095 88.3388C29.8059 89.3424 28.4447 89.9062 27.0254 89.9062C25.6061 89.9062 24.2449 89.3424 23.2413 88.3388C22.2377 87.3352 21.6739 85.974 21.6739 84.5547V52.4453C21.6739 51.026 22.2377 49.6648 23.2413 48.6612C24.2449 47.6576 25.6061 47.0938 27.0254 47.0938C28.4447 47.0938 29.8059 47.6576 30.8095 48.6612C31.8132 49.6648 32.377 51.026 32.377 52.4453Z"
                fill="#CECE00"
              />
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_223_2"
                x1="130"
                y1="93"
                x2="7.50001"
                y2="32.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#E3B00C" />
                <stop offset="1" stop-color="#FDFF02" />
              </linearGradient>
              <clipPath id="clip0_223_2">
                <rect width="137" height="137" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {{ data.golden }}
        </div>
        <div class="count-type">
          <svg width="1em" height="1em" viewBox="0 0 137 137" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_223_8)">
              <path
                d="M126.297 105.961V97.2655C115.833 93.6291 108.301 83.6677 108.301 71.9804V65.0207C108.301 53.3332 115.833 43.3718 126.297 39.7351V31.0388H10.7031V105.961H126.297M126.297 116.664H10.7031C9.29737 116.666 7.90508 116.39 6.60631 115.852C5.30755 115.314 4.12791 114.525 3.13523 113.529C2.15756 112.554 1.3785 111.399 0.841285 110.127C0.283443 108.809 -0.00269071 107.392 1.9068e-05 105.961V31.0391C1.9068e-05 29.5942 0.282849 28.1926 0.841017 26.8734C1.37828 25.6015 2.15733 24.446 3.13496 23.4709C4.10987 22.4934 5.26523 21.7145 6.53695 21.1772C7.85491 20.6192 9.27193 20.333 10.7031 20.3357H126.297C127.742 20.3357 129.143 20.6188 130.463 21.177C131.735 21.7142 132.89 22.4932 133.865 23.4707C134.843 24.4457 135.622 25.6013 136.159 26.8732C136.717 28.191 137.003 29.6078 137 31.0388V48.9652H135.058C126.206 48.9652 119.004 56.1676 119.004 65.0205V71.9802C119.004 80.8333 126.206 88.0354 135.058 88.0354H137V105.961C137.003 107.392 136.717 108.809 136.159 110.127C135.622 111.399 134.843 112.554 133.865 113.529C132.872 114.525 131.693 115.314 130.394 115.852C129.095 116.39 127.703 116.666 126.297 116.664V116.664Z"
                fill="#FFFFFF"
              />
              <path
                d="M32.377 52.4453V84.5547C32.377 85.974 31.8132 87.3352 30.8095 88.3388C29.8059 89.3424 28.4447 89.9062 27.0254 89.9062C25.6061 89.9062 24.2449 89.3424 23.2413 88.3388C22.2377 87.3352 21.6739 85.974 21.6739 84.5547V52.4453C21.6739 51.026 22.2377 49.6648 23.2413 48.6612C24.2449 47.6576 25.6061 47.0938 27.0254 47.0938C28.4447 47.0938 29.8059 47.6576 30.8095 48.6612C31.8132 49.6648 32.377 51.026 32.377 52.4453Z"
                fill="#FFFFFF"
              />
            </g>
            <defs>
              <clipPath id="clip0_223_8">
                <rect width="137" height="137" fill="white" />
              </clipPath>
            </defs>
          </svg>
          {{ data.normal }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.view-point {
  height: 100%;
  padding: 0 1.5rem;
  color: white;
  font-family: 'Montserrat';
  font-weight: bolder;
  font-size: 6rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: v-bind('data.dark_color');
}
.view-point span {
  font-size: 1.5rem;
  font-weight: normal;
}
.view-box {
  @include card;
  @include acrylic;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  white-space: nowrap;
}
.main-progress {
  position: absolute;
  top: 0;
  left: 0;
  // background-color: var(--c-accent);
  background-color: v-bind('data.dark_color');
  opacity: 0.18;
  height: 100%;
  width: 0;
  z-index: -1;
}

.main-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  // gap: 4.75rem;
  padding: 1.5rem 1.75rem;
  flex-grow: 1;
  overflow: hidden;

  h1 {
    font-size: 2.5rem;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  .details {
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    .chips {
      display: flex;
      gap: 1rem;
    }
  }
}

.view-sub-count {
  display: flex;
  gap: 0.5em;
  font-size: 0.3em;
  font-weight: bold;
}

.count-type {
  display: flex;
  align-items: center;
  gap: 0.2em;
}
</style>
