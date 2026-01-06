<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const songs = ref([
  {
    title: "鹿 be free (Live)",
    artist: "尚雯婕",
    src: "./music/尚雯婕 - 鹿 be free (Live).ogg",
  },
  {
    title: "小尖尖",
    artist: "韩红 _ 薛之谦",
    src: "./music/韩红 _ 薛之谦 - 小尖尖.ogg",
  },
]);

const currentSongIndex = ref(0);
const isPlaying = ref(false);
const volume = ref(0.5);
const currentTime = ref(0);
const duration = ref(0);
const audioRef = ref(null);

const play = () => {
  if (audioRef.value) {
    audioRef.value.play();
    isPlaying.value = true;
  }
};

const pause = () => {
  if (audioRef.value) {
    audioRef.value.pause();
    isPlaying.value = false;
  }
};

const togglePlay = () => {
  if (isPlaying.value) {
    pause();
  } else {
    play();
  }
};

const playPrevious = () => {
  currentSongIndex.value =
    (currentSongIndex.value - 1 + songs.value.length) % songs.value.length;
  currentTime.value = 0;
  setTimeout(() => {
    if (isPlaying.value) {
      play();
    }
  }, 0);
};

const playNext = () => {
  currentSongIndex.value = (currentSongIndex.value + 1) % songs.value.length;
  currentTime.value = 0;
  setTimeout(() => {
    if (isPlaying.value) {
      play();
    }
  }, 0);
};

const handleTimeUpdate = () => {
  if (audioRef.value) {
    currentTime.value = audioRef.value.currentTime;
  }
};

const handleLoadedMetadata = () => {
  if (audioRef.value) {
    duration.value = audioRef.value.duration;
  }
};

const handleEnded = () => {
  playNext();
};

const handleVolumeChange = (e) => {
  volume.value = parseFloat(e.target.value);
  if (audioRef.value) {
    audioRef.value.volume = volume.value;
  }
};

const handleSeek = (e) => {
  const seekTime = parseFloat(e.target.value);
  currentTime.value = seekTime;
  if (audioRef.value) {
    audioRef.value.currentTime = seekTime;
  }
};

const formatTime = (time) => {
  if (isNaN(time)) return "0:00";
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
};

onMounted(() => {
  if (audioRef.value) {
    audioRef.value.volume = volume.value;
  }
});

onUnmounted(() => {
  if (audioRef.value) {
    audioRef.value.pause();
  }
});
</script>

<template>
  <div class="music-player">
    <audio
      ref="audioRef"
      :src="songs[currentSongIndex].src"
      @timeupdate="handleTimeUpdate"
      @loadedmetadata="handleLoadedMetadata"
      @ended="handleEnded"
    />

    <div class="player-controls">
      <button @click="playPrevious" class="control-btn" title="上一首">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 6h2v12H6zm3.5 6l8.5 6V6z" />
        </svg>
      </button>

      <button
        @click="togglePlay"
        class="control-btn play-btn"
        :title="isPlaying ? '暂停' : '播放'"
      >
        <svg
          v-if="!isPlaying"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M8 5v14l11-7z" />
        </svg>
        <svg
          v-else
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
        </svg>
      </button>

      <button @click="playNext" class="control-btn" title="下一首">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
        </svg>
      </button>
    </div>

    <div class="player-info">
      <div class="song-title">{{ songs[currentSongIndex].title }}</div>
      <div class="song-artist">{{ songs[currentSongIndex].artist }}</div>
    </div>

    <div class="progress-container">
      <input
        type="range"
        min="0"
        :max="duration || 100"
        :value="currentTime"
        @input="handleSeek"
        class="progress-bar"
      />
      <div class="time-display">
        {{ formatTime(currentTime) }} / {{ formatTime(duration) }}
      </div>
    </div>

    <div class="volume-container">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="currentColor"
        class="volume-icon"
      >
        <path
          v-if="volume > 0.5"
          d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
        />
        <path
          v-else-if="volume > 0"
          d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"
        />
        <path
          v-else
          d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z"
        />
      </svg>
      <input
        type="range"
        min="0"
        max="1"
        step="0.01"
        :value="volume"
        @input="handleVolumeChange"
        class="volume-slider"
      />
    </div>
  </div>
</template>

<style scoped>
.music-player {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  background-color: rgba(255, 255, 255, 0.95);
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
  padding: 16px;
  backdrop-filter: blur(10px);
  z-index: 1000;
  transition: all 0.3s ease;
}

.music-player:hover {
  box-shadow: 0 6px 24px rgba(0, 0, 0, 0.3);
}

.player-controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
}

.control-btn {
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover {
  background-color: rgba(0, 0, 0, 0.1);
  transform: scale(1.1);
}

.play-btn {
  background-color: #4caf50;
  color: white;
  width: 48px;
  height: 48px;
  padding: 12px;
}

.play-btn:hover {
  background-color: #45a049;
  transform: scale(1.1);
}

.player-info {
  text-align: center;
  margin-bottom: 12px;
}

.song-title {
  font-size: 14px;
  font-weight: bold;
  color: #333;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song-artist {
  font-size: 12px;
  color: #666;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.progress-container {
  margin-bottom: 12px;
}

.progress-bar {
  width: 100%;
  height: 4px;
  background-color: #ddd;
  border-radius: 2px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.progress-bar::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 12px;
  height: 12px;
  background-color: #4caf50;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.progress-bar::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

.time-display {
  font-size: 10px;
  color: #666;
  text-align: center;
  margin-top: 4px;
}

.volume-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.volume-icon {
  color: #666;
}

.volume-slider {
  flex: 1;
  height: 4px;
  background-color: #ddd;
  border-radius: 2px;
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;
}

.volume-slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 10px;
  height: 10px;
  background-color: #4caf50;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
}

.volume-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .music-player {
    width: calc(100% - 40px);
    bottom: 10px;
    right: 10px;
    left: 10px;
  }
}
</style>
