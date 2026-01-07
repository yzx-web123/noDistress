// 照片数据数组
export const photos = [
  {
    id: 1,
    src: "./images/1.jpg",
    title: "待定",
    description: "无名非无名，事了拂衣去",
    gameId: "染冉",
  },
  {
    id: 2,
    src: "./images/datou.png",
    title: "调律圣手",
    description: "调律圣手，百业担当，性感头妈为你护航",
    gameId: "哈基头",
  },
  {
    id: 3,
    src: "./images/sha2.png",
    title: "摸鱼大王",
    description: "无名非无名，事了拂衣去",
    gameId: "落雁纱",
  },

  {
    id: 4,
    src: "./images/cijian.png",
    title: "爆血大师",
    description: "行走江湖的正义之士，剑法超群",
    gameId: "词间",
  },
  {
    id: 5,
    src: "./images/chuqi.jpg",
    title: "神医圣手",
    description: "医术精湛，能治愈各种疑难杂症",
    gameId: "初七",
  },
  {
    id: 6,
    src: "./images/chenhe.png",
    title: "无敌钧钧",
    description: "手法超绝，秀你一脸",
    gameId: "谌禾",
  },
  {
    id: 7,
    src: "./images/xiangyu.jpg",
    title: "飞天大炮",
    description: "身法轻盈，浮空万里",
    gameId: "相遇不是香芋",
  },
  {
    id: 8,
    src: "./images/huaqingying.png",
    title: "机甲奶妈2号",
    description: "超绝奶量，保你输出无忧",
    gameId: "花清影",
  },
  {
    id: 9,
    src: "./images/shuye.png",
    title: "神·霖霖",
    description: "副本定心丸，团队守护者",
    gameId: "书夜栖",
  },
  {
    id: 10,
    src: "./images/tongtong.jpg",
    title: "可爱小男娘",
    description: "尝尝飞天炮的滋味吧",
    gameId: "童源熙",
  },
  {
    id: 11,
    src: "./images/banli.jpg",
    title: "牛逼拳王2号",
    description: "百业的鸢始天尊，拥有强大的实力",
    gameId: "大板栗",
  },
  {
    id: 12,
    src: "./images/youxin2.png",
    title: "甜心御姐",
    description: "甜嗓带风，御姐带锋",
    gameId: "灬冇心",
  },
  {
    id: 13,
    src: "./images/lysca.jpg",
    title: "空歌小徒弟",
    description: "鸢鸢小萌新，小拳拳锤你心",
    gameId: "祾佑岁长安",
  },
  {
    id: 14,
    src: "./images/chu2.png",
    title: "黑工劳模",
    description: "人狠话不多，效率拉满不啰嗦",
    gameId: "褚书砚",
  },
];

// 添加图片函数
export const addPhoto = (photo) => {
  // 生成新的 id（确保唯一性）
  const newId =
    photos.length > 0 ? Math.max(...photos.map((p) => p.id)) + 1 : 1;
  photos.push({
    id: newId,
    ...photo,
  });
};

// 删除图片函数
export const removePhoto = (id) => {
  const index = photos.findIndex((photo) => photo.id === id);
  if (index !== -1) {
    photos.splice(index, 1);
  }
};

// 获取所有图片函数
export const getAllPhotos = () => {
  return [...photos];
};

// 根据 id 获取图片函数
export const getPhotoById = (id) => {
  return photos.find((photo) => photo.id === id);
};

// 更新图片函数
export const updatePhoto = (id, updatedPhoto) => {
  const index = photos.findIndex((photo) => photo.id === id);
  if (index !== -1) {
    photos[index] = {
      id,
      ...updatedPhoto,
    };
  }
};
