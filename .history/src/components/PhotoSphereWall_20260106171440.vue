<template>
  <div class="photo-sphere-container">
    <div ref="canvasContainer" class="canvas-container"></div>
    <!-- 图片放大查看弹窗 -->
    <div class="modal" v-if="selectedPhoto" @click="closeModal">
      <div class="modal-content" @click.stop>
        <div class="modal-header">
          <h2>{{ selectedPhoto.title }}</h2>
          <button class="close-btn" @click="closeModal">&times;</button>
        </div>
        <div class="modal-body">
          <img
            :src="selectedPhoto.src"
            :alt="selectedPhoto.title"
            class="modal-img"
          />
          <p class="modal-description">{{ selectedPhoto.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import * as THREE from "three";
import { photos } from "../data/photos";

const canvasContainer = ref(null);
const selectedPhoto = ref(null);
let scene, camera, renderer, sphereGroup;
let mouseX = 0,
  mouseY = 0;
let targetRotationX = 0,
  targetRotationY = 0;

// 初始化Three.js场景
const init = () => {
  // 创建场景
  scene = new THREE.Scene();

  // 创建相机
  camera = new THREE.PerspectiveCamera(
    80,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );
  camera.position.z = 3;

  // 创建渲染器
  renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  canvasContainer.value.appendChild(renderer.domElement);

  // 创建球体照片墙
  createPhotoSphere();

  // 添加环境光
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  // 添加点光源
  const pointLight = new THREE.PointLight(0xffffff, 1);
  pointLight.position.set(5, 5, 5);
  scene.add(pointLight);

  // 监听窗口大小变化
  window.addEventListener("resize", onWindowResize);

  // 监听鼠标移动
  window.addEventListener("mousemove", onMouseMove);

  // 开始动画循环
  animate();
};

// 创建球体照片墙
const createPhotoSphere = () => {
  sphereGroup = new THREE.Group();
  scene.add(sphereGroup);

  const radius = 2.5;
  const totalPhotos = photos.length;

  // 计算每张图片的位置
  for (let i = 0; i < totalPhotos; i++) {
    // 计算球面上的位置
    const phi = Math.acos(-1 + (2 * i) / totalPhotos);
    const theta = Math.sqrt(totalPhotos * Math.PI) * phi;

    const x = radius * Math.sin(phi) * Math.cos(theta);
    const y = radius * Math.sin(phi) * Math.sin(theta);
    const z = radius * Math.cos(phi);

    // 创建图片平面
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load(photos[i].src, (tex) => {
      // 纹理加载完成后调整材质
      planeMaterial.map = tex;
      planeMaterial.needsUpdate = true;
    });

    const planeGeometry = new THREE.PlaneGeometry(0.8, 0.6);
    const planeMaterial = new THREE.MeshBasicMaterial({
      map: texture,
      transparent: true,
      side: THREE.DoubleSide,
    });
    const plane = new THREE.Mesh(planeGeometry, planeMaterial);

    // 设置位置
    plane.position.set(x, y, z);
    plane.lookAt(0, 0, 0);

    // 添加到球体组
    sphereGroup.add(plane);

    // 保存照片数据
    plane.userData.photo = photos[i];
  }
};

// 窗口大小变化事件
const onWindowResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
};

// 鼠标移动事件
const onMouseMove = (event) => {
  // 计算鼠标位置相对于窗口中心的偏移
  mouseX = (event.clientX / window.innerWidth) * 2 - 1;
  mouseY = -(event.clientY / window.innerHeight) * 2 + 1;

  // 更新目标旋转角度
  targetRotationX = mouseY * 0.5;
  targetRotationY = mouseX * 0.5;
};

// 动画循环
const animate = () => {
  requestAnimationFrame(animate);

  // 平滑旋转球体
  if (sphereGroup) {
    sphereGroup.rotation.x += (targetRotationX - sphereGroup.rotation.x) * 0.05;
    sphereGroup.rotation.y += (targetRotationY - sphereGroup.rotation.y) * 0.05;
  }

  renderer.render(scene, camera);
};

// 点击事件检测
const handleClick = (event) => {
  const rect = renderer.domElement.getBoundingClientRect();
  const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
  const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

  const raycaster = new THREE.Raycaster();
  raycaster.setFromCamera({ x, y }, camera);

  const intersects = raycaster.intersectObjects(sphereGroup.children);

  if (intersects.length > 0) {
    selectedPhoto.value = intersects[0].object.userData.photo;
  }
};

// 关闭模态框
const closeModal = () => {
  selectedPhoto.value = null;
};

// 组件挂载
onMounted(() => {
  init();
  // 添加点击事件监听
  renderer.domElement.addEventListener("click", handleClick);
});

// 组件卸载
onUnmounted(() => {
  // 移除事件监听器
  window.removeEventListener("resize", onWindowResize);
  window.removeEventListener("mousemove", onMouseMove);
  if (renderer && renderer.domElement) {
    renderer.domElement.removeEventListener("click", handleClick);
  }

  // 清理资源
  if (renderer) {
    renderer.dispose();
  }
});
</script>

<style scoped>
.photo-sphere-container {
  width: 100%;
  height: 300px;
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  margin: 0 auto;
  max-width: 1000px;
}

.canvas-container {
  width: 100%;
  height: 100%;
}

/* 模态框样式 */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background-color: rgba(0, 0, 0, 0.9);
  border-radius: 15px;
  padding: 20px;
  max-width: 800px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: slideInUp 0.3s ease;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.modal-header h2 {
  font-size: 1.8rem;
  color: #f1c40f;
  margin: 0;
}

.close-btn {
  background: none;
  border: none;
  color: #ffffff;
  font-size: 2rem;
  cursor: pointer;
  opacity: 0.7;
  transition: all 0.3s ease;
}

.close-btn:hover {
  opacity: 1;
  color: #f1c40f;
  transform: scale(1.1);
}

.modal-img {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.modal-description {
  font-size: 1rem;
  line-height: 1.6;
  color: #ffffff;
  opacity: 0.9;
}

/* 动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideInUp {
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
</style>
