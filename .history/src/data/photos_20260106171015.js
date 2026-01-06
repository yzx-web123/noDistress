// 图片数据管理文件
// 这里存储所有照片墙和百业成员页面的图片数据
// 方便后续添加、删除和修改图片

// 照片数据数组
export const photos = [
  { 
    id: 1, 
    src: "./images/1.jpg", 
    title: "江湖聚会", 
    description: "燕云十六声成员首次相聚" 
  },
  { 
    id: 2, 
    src: "./images/2.png", 
    title: "武艺切磋", 
    description: "各门派武艺交流" 
  },
  { 
    id: 3, 
    src: "./images/3.jpg", 
    title: "山川美景", 
    description: "游历山川，欣赏美景" 
  },
  { 
    id: 4, 
    src: "./images/4.jpg", 
    title: "英雄气概", 
    description: "展现江湖英雄气概" 
  },
  { 
    id: 5, 
    src: "./images/5.jpg", 
    title: "侠义心肠", 
    description: "弘扬侠义精神" 
  },
  { 
    id: 6, 
    src: "./images/6.png", 
    title: "剑法精通", 
    description: "剑侠展示精妙剑法" 
  },
  { 
    id: 7, 
    src: "./images/7.jpg", 
    title: "刀法无双", 
    description: "刀客展现强大刀法" 
  },
  { 
    id: 8, 
    src: "./images/8.png", 
    title: "暗器专家", 
    description: "暗器高手展示技艺" 
  },
  { 
    id: 9, 
    src: "./images/9.jpg", 
    title: "轻功卓越", 
    description: "轻功大师展示轻功" 
  },
  { 
    id: 10, 
    src: "./images/10.png", 
    title: "内力深厚", 
    description: "内功高手展示内力" 
  },
];

// 添加图片函数
export const addPhoto = (photo) => {
  // 生成新的 id（确保唯一性）
  const newId = photos.length > 0 ? Math.max(...photos.map(p => p.id)) + 1 : 1;
  photos.push({
    id: newId,
    ...photo
  });
};

// 删除图片函数
export const deletePhoto = (id) => {
  const index = photos.findIndex(p => p.id === id);
  if (index !== -1) {
    photos.splice(index, 1);
  }
};

// 更新图片函数
export const updatePhoto = (id, updatedPhoto) => {
  const index = photos.findIndex(p => p.id === id);
  if (index !== -1) {
    photos[index] = {
      ...photos[index],
      ...updatedPhoto
    };
  }
};

// 根据 id 查找图片函数
export const getPhotoById = (id) => {
  return photos.find(p => p.id === id);
};
