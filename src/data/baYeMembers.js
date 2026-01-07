// 百业成员数据数组
export const baYeMembers = [
  {
    id: 1,
    src: "./images/banli.jpg",
    title: "牛逼拳王2号",
    description: "百业的鸢始天尊，拥有强大的实力",
    gameId: "大板栗",
  },
  {
    id: 2,
    src: "./images/cijian.png",
    title: "爆血大师",
    description: "行走江湖的正义之士，剑法超群",
    gameId: "词间",
  },
  {
    id: 3,
    src: "./images/chuqi.jpg",
    title: "神医圣手",
    description: "医术精湛，能治愈各种疑难杂症",
    gameId: "初七",
  },
  {
    id: 4,
    src: "./images/chenhe.png",
    title: "无敌钧钧",
    description: "手法超绝，秀你一脸",
    gameId: "谌禾",
  },
  {
    id: 5,
    src: "./images/xiangyu.jpg",
    title: "飞天大炮",
    description: "身法轻盈，浮空万里",
    gameId: "相遇不是香芋",
  },
  {
    id: 6,
    src: "./images/huaqingying.png",
    title: "机甲奶妈2号",
    description: "超绝奶量，保你输出无忧",
    gameId: "花清影",
  },
  {
    id: 7,
    src: "./images/shuye.png",
    title: "神·霖霖",
    description: "副本定心丸，团队守护者",
    gameId: "书夜栖",
  },
  {
    id: 8,
    src: "./images/tongtong.jpg",
    title: "可爱小男娘",
    description: "尝尝飞天炮的滋味吧",
    gameId: "童源熙",
  },
  {
    id: 9,
    src: "./images/sha2.png",
    title: "摸鱼大王",
    description: "无名非无名，事了拂衣去",
    gameId: "落雁纱",
  },
  {
    id: 10,
    src: "./images/10.png",
    title: "棍僧",
    description: "少林棍法，刚柔并济",
    gameId: "",
  },
  {
    id: 11,
    src: "./images/1.jpg",
    title: "剑圣",
    description: "剑中之圣，剑法无双",
    gameId: "",
  },
  {
    id: 12,
    src: "./images/2.png",
    title: "刀神",
    description: "刀中之神，刀法通神",
    gameId: "",
  },
];

// 添加成员函数
export const addBaYeMember = (member) => {
  // 生成新的 id（确保唯一性）
  const newId =
    baYeMembers.length > 0 ? Math.max(...baYeMembers.map((p) => p.id)) + 1 : 1;
  baYeMembers.push({
    id: newId,
    ...member,
  });
};

// 删除成员函数
export const removeBaYeMember = (id) => {
  const index = baYeMembers.findIndex((member) => member.id === id);
  if (index !== -1) {
    baYeMembers.splice(index, 1);
  }
};

// 获取所有成员函数
export const getAllBaYeMembers = () => {
  return [...baYeMembers];
};

// 根据 id 获取成员函数
export const getBaYeMemberById = (id) => {
  return baYeMembers.find((member) => member.id === id);
};

// 更新成员函数
export const updateBaYeMember = (id, updatedMember) => {
  const index = baYeMembers.findIndex((member) => member.id === id);
  if (index !== -1) {
    baYeMembers[index] = {
      id,
      ...updatedMember,
    };
  }
};
