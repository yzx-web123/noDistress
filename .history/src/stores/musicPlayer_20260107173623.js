import { ref, computed } from "vue";
import { setCache, getCache } from "../utils/localStorage";

// 动态读取 music 文件夹中的所有音乐文件
const musicFiles = import.meta.glob("/public/music/*", { as: "url" });

// 解析歌曲信息
const parseSongInfo = (filename) => {
  // 去除文件扩展名
  const nameWithoutExt = filename.replace(/\.[^/.]+$/, "");
  // 尝试解析标题和艺术家（假设格式为 "艺术家 - 标题" 或 "艺术家_标题"）
  let artist = "未知艺术家";
  let title = nameWithoutExt;

  if (nameWithoutExt.includes(" - ")) {
    const parts = nameWithoutExt.split(" - ");
    artist = parts[0];
    title = parts[1];
  } else if (nameWithoutExt.includes(" _ ")) {
    const parts = nameWithoutExt.split(" _ ");
    artist = parts[0];
    title = parts[1];
  }

  return {
    artist,
    title,
  };
};

// 从缓存读取或构建歌曲列表
const songs = ref([]);
const cachedSongs = getCache("musicPlayerSongs");
if (cachedSongs) {
  // 使用缓存数据
  songs.value = cachedSongs;
} else {
  // 构建歌曲列表
  for (const [path, urlImporter] of Object.entries(musicFiles)) {
    // 提取文件名（如 "尚雯婕 - 鹿 be free (Live).ogg"）
    const filename = path.split("/").pop();
    // 解析歌曲信息
    const { artist, title } = parseSongInfo(filename);
    // 构造音频源路径（使用相对路径）
    const src = `./music/${filename}`;
    // 添加到歌曲列表
    songs.value.push({
      title,
      artist,
      src,
    });
  }
  // 缓存数据
  setCache("musicPlayerSongs", songs.value);
}

const currentSongIndex = ref(0);
const isPlaying = ref(false);
const volume = ref(0.5);
const currentTime = ref(0);
const duration = ref(0);
const showPlaylist = ref(false);

const currentSong = computed(() => songs.value[currentSongIndex.value]);

const play = () => {
  isPlaying.value = true;
};

const pause = () => {
  isPlaying.value = false;
};

const togglePlay = () => {
  isPlaying.value = !isPlaying.value;
};

const playPrevious = () => {
  currentSongIndex.value =
    (currentSongIndex.value - 1 + songs.value.length) % songs.value.length;
  currentTime.value = 0;
};

const playNext = () => {
  currentSongIndex.value = (currentSongIndex.value + 1) % songs.value.length;
  currentTime.value = 0;
};

const playSong = (index) => {
  currentSongIndex.value = index;
  currentTime.value = 0;
  isPlaying.value = true;
  showPlaylist.value = false;
};

const setCurrentTime = (time) => {
  currentTime.value = time;
};

const setDuration = (time) => {
  duration.value = time;
};

const setVolume = (vol) => {
  volume.value = vol;
};

const togglePlaylist = () => {
  showPlaylist.value = !showPlaylist.value;
};

export {
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
};
