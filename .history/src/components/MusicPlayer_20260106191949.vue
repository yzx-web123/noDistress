<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import {
  songs,
  currentSong,
  currentSongIndex,
  isPlaying,
  volume,
  currentTime,
  duration,
  showPlaylist,
  play,
  pause,
  togglePlay,
  playPrevious,
  playNext,
  playSong,
  setCurrentTime,
  setDuration,
  setVolume,
  togglePlaylist,
} from "../stores/musicPlayer";

const audioRef = ref(null);
const route = useRoute();

const handleTimeUpdate = () => {
  if (audioRef.value) {
    setCurrentTime(audioRef.value.currentTime);
  }
};

const handleLoadedMetadata = () => {
  if (audioRef.value) {
    setDuration(audioRef.value.duration);
  }
};

const handleEnded = () => {
  playNext();
};

const handleVolumeChange = (e) => {
  setVolume(parseFloat(e.target.value));
};

const handleSeek = (e) => {
  const seekTime = parseFloat(e.target.value);
  setCurrentTime(seekTime);
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
    // 如果当前应该播放且音频已经加载，继续播放
    if (isPlaying.value) {
      audioRef.value.play().catch(() => {
        // 自动播放可能会被浏览器阻止
        console.log("自动播放被阻止");
      });
    }
  }
});

// 监听播放状态变化
watch(isPlaying, (newValue) => {
  if (audioRef.value) {
    if (newValue) {
      audioRef.value.play().catch(() => {
        console.log("播放被阻止");
        isPlaying.value = false;
      });
    } else {
      audioRef.value.pause();
    }
  }
});

// 监听音量变化
watch(volume, (newValue) => {
  if (audioRef.value) {
    audioRef.value.volume = newValue;
  }
});

// 监听当前播放歌曲变化
watch(currentSongIndex, () => {
  if (audioRef.value) {
    audioRef.value.currentTime = 0;
    if (isPlaying.value) {
      audioRef.value.play().catch(() => {
        console.log("播放被阻止");
        isPlaying.value = false;
      });
    }
  }
});

// 监听路由变化，确保播放器不会被重新渲染
watch(
  () => route.path,
  () => {
    // 不需要做任何操作，因为播放器在 App.vue 中
  }
);
</script>

<template>
  <div class="music-player">
    <audio
      ref="audioRef"
      :src="currentSong.src"
      @timeupdate="handleTimeUpdate"
      @loadedmetadata="handleLoadedMetadata"
      @ended="handleEnded"
    />

    <!-- 歌曲列表切换按钮 -->
    <div class="playlist-toggle">
      <button @click="togglePlaylist" class="playlist-btn">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path
            d="M3 13h2v-2H3v2zm0 4h2v-2H3v2zm0-8h2V7H3v2zm4 4h14v-2H7v2zm0 4h14v-2H7v2zM7 7v2h14V7H7z"
          />
        </svg>
        {{ showPlaylist ? "收起" : "歌曲列表" }}
      </button>
    </div>

    <!-- 歌曲列表 -->
    <div v-if="showPlaylist" class="playlist">
      <div
        v-for="(song, index) in songs"
        :key="index"
        @click="playSong(index)"
        class="playlist-item"
        :class="{ active: index === currentSongIndex }"
      >
        <div class="playlist-item-info">
          <div class="playlist-item-title">{{ song.title }}</div>
          <div class="playlist-item-artist">{{ song.artist }}</div>
        </div>
        <div v-if="index === currentSongIndex" class="playing-indicator">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M8 5v14l11-7z" />
          </svg>
        </div>
      </div>
    </div>

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
      <div class="song-title">{{ currentSong.title }}</div>
      <div class="song-artist">{{ currentSong.artist }}</div>
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
  background-color: rgba(17, 17, 17, 0.9);
  border: 1px solid rgba(248, 218, 167, 0.3);
  border-radius: 12px;
  box-shadow: 0 0 20px rgba(255, 167, 143, 0.3);
  padding: 16px;
  backdrop-filter: blur(10px);
  z-index: 99999;
  transition: all 0.3s ease;
  animation: fadeIn 0.5s ease;
  max-height: 90vh;
  overflow: hidden;
  pointer-events: auto;
  position: relative;
}

.playlist-toggle {
  margin-bottom: 12px;
}

.playlist-btn {
  background: none;
  border: none;
  color: #fde68a;
  cursor: pointer;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 14px;
}

.playlist-btn:hover {
  background-color: rgba(253, 230, 138, 0.1);
  color: #fef3c7;
}

.playlist {
  max-height: 200px;
  overflow-y: auto;
  margin-bottom: 12px;
  border: 1px solid rgba(248, 218, 167, 0.2);
  border-radius: 8px;
  padding: 8px;
  background-color: rgba(0, 0, 0, 0.3);
  transition: all 0.3s ease;
}

.playlist-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.playlist-item:hover {
  background-color: rgba(253, 230, 138, 0.1);
  transform: translateX(5px);
}

.playlist-item.active {
  background-color: rgba(248, 113, 113, 0.2);
  border: 1px solid rgba(248, 113, 113, 0.4);
}

.playlist-item-info {
  flex: 1;
  overflow: hidden;
}

.playlist-item-title {
  font-size: 12px;
  font-weight: bold;
  color: #fef3c7;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
}

.playlist-item-artist {
  font-size: 10px;
  color: #fde68a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.playing-indicator {
  color: #f87171;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
}

/* 滚动条样式 */
.playlist::-webkit-scrollbar {
  width: 4px;
}

.playlist::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 2px;
}

.playlist::-webkit-scrollbar-thumb {
  background: rgba(248, 218, 167, 0.5);
  border-radius: 2px;
}

.playlist::-webkit-scrollbar-thumb:hover {
  background: rgba(248, 218, 167, 0.8);
}

.music-player:hover {
  box-shadow: 0 0 30px rgba(255, 167, 143, 0.5);
  transform: translateY(-2px);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
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
  color: #fde68a;
  cursor: pointer;
  padding: 8px;
  border-radius: 50%;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover {
  background-color: rgba(253, 230, 138, 0.1);
  transform: scale(1.1);
  color: #fef3c7;
}

.play-btn {
  background: linear-gradient(135deg, #f87171, #fbbf24);
  color: white;
  width: 48px;
  height: 48px;
  padding: 12px;
  box-shadow: 0 4px 12px rgba(248, 113, 113, 0.4);
}

.play-btn:hover {
  background: linear-gradient(135deg, #fca5a5, #fcd34d);
  transform: scale(1.1);
  box-shadow: 0 6px 16px rgba(248, 113, 113, 0.6);
}

.player-info {
  text-align: center;
  margin-bottom: 12px;
}

.song-title {
  font-size: 14px;
  font-weight: bold;
  color: #fef3c7;
  margin-bottom: 4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.song-artist {
  font-size: 12px;
  color: #fde68a;
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
  background-color: rgba(253, 230, 138, 0.2);
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
  background: linear-gradient(135deg, #f87171, #fbbf24);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0 8px rgba(248, 113, 113, 0.5);
}

.progress-bar::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 12px rgba(248, 113, 113, 0.8);
}

.time-display {
  font-size: 10px;
  color: #fde68a;
  text-align: center;
  margin-top: 4px;
}

.volume-container {
  display: flex;
  align-items: center;
  gap: 8px;
}

.volume-icon {
  color: #fde68a;
}

.volume-slider {
  flex: 1;
  height: 4px;
  background-color: rgba(253, 230, 138, 0.2);
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
  background: linear-gradient(135deg, #f87171, #fbbf24);
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 0 6px rgba(248, 113, 113, 0.5);
}

.volume-slider::-webkit-slider-thumb:hover {
  transform: scale(1.2);
  box-shadow: 0 0 10px rgba(248, 113, 113, 0.8);
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
