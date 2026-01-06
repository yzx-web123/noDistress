// 百业成员数据数组
export const baYeMembers = [
  {
    id: 1,
    src: "./images/1.jpg",
    title: "武林盟主、猛男黑工",
    description: "百业联盟的领导者，拥有强大的实力和领导力",
  },
  {
    id: 2,
    src: "./images/2.png",
    title: "江湖侠客",
    description: "行走江湖的正义之士，剑法超群",
  },
  {
    id: 3,
    src: "./images/3.jpg",
    title: "神医圣手",
    description: "医术精湛，能治愈各种疑难杂症",
  },
  {
    id: 4,
    src: "./images/4.jpg",
    title: "暗器专家",
    description: "擅长使用各种暗器，手法精准",
  },
  {
    id: 5,
    src: "./images/5.jpg",
    title: "轻功大师",
    description: "身法轻盈，日行千里",
  },
  {
    id: 6,
    src: "./images/6.png",
    title: "铁掌帮主",
    description: "掌力惊人，铁掌无敌",
  },
  {
    id: 7,
    src: "./images/7.jpg",
    title: "剑术宗师",
    description: "剑法出神入化，无人能敌",
  },
  {
    id: 8,
    src: "./images/8.png",
    title: "刀客首领",
    description: "刀法精湛，统领一方刀客",
  },
  {
    id: 9,
    src: "./images/9.jpg",
    title: "拳法家",
    description: "拳法刚猛，力大无穷",
  },
  {
    id: 10,
    src: "./images/10.png",
    title: "棍僧",
    description: "少林棍法，刚柔并济",
  },
  {
    id: 11,
    src: "./images/1.jpg",
    title: "剑圣",
    description: "剑中之圣，剑法无双",
  },
  {
    id: 12,
    src: "./images/2.png",
    title: "刀神",
    description: "刀中之神，刀法通神",
  },
  {
    id: 13,
    src: "./images/3.jpg",
    title: "枪王",
    description: "枪法如神，百发百中",
  },
  {
    id: 14,
    src: "./images/4.jpg",
    title: "斧皇",
    description: "力大无穷，战斧威力惊人",
  },
  {
    id: 15,
    src: "./images/5.jpg",
    title: "锤将",
    description: "双锤挥舞，势不可挡",
  },
  {
    id: 16,
    src: "./images/6.png",
    title: "弓圣",
    description: "弓箭之圣，百步穿杨",
  },
  {
    id: 17,
    src: "./images/7.jpg",
    title: "弩王",
    description: "弩箭专家，精准打击",
  },
  {
    id: 18,
    src: "./images/8.png",
    title: "鞭神",
    description: "长鞭飞舞，变幻莫测",
  },
  {
    id: 19,
    src: "./images/9.jpg",
    title: "棒侠",
    description: "棍棒高手，身法灵活",
  },
  {
    id: 20,
    src: "./images/10.png",
    title: "棍圣",
    description: "棍法宗师，登峰造极",
  },
  {
    id: 21,
    src: "./images/1.jpg",
    title: "掌法大师",
    description: "掌法精湛，内力深厚",
  },
  {
    id: 22,
    src: "./images/2.png",
    title: "指法宗师",
    description: "一指禅功，点穴精准",
  },
  {
    id: 23,
    src: "./images/3.jpg",
    title: "腿功高手",
    description: "腿脚功夫了得，踢法精准",
  },
  {
    id: 24,
    src: "./images/4.jpg",
    title: "轻功高手",
    description: "身轻如燕，飞檐走壁",
  },
  {
    id: 25,
    src: "./images/5.jpg",
    title: "内力大师",
    description: "内力深厚，可运功疗伤",
  },
  {
    id: 26,
    src: "./images/6.png",
    title: "外功高手",
    description: "外家功夫，刚猛有力",
  },
  {
    id: 27,
    src: "./images/7.jpg",
    title: "刚猛型",
    description: "性格豪爽，功夫刚猛",
  },
  {
    id: 28,
    src: "./images/8.png",
    title: "阴柔型",
    description: "性格阴柔，功夫细腻",
  },
  {
    id: 29,
    src: "./images/9.jpg",
    title: "刚柔并济",
    description: "功夫刚柔相济，威力无穷",
  },
  {
    id: 30,
    src: "./images/10.png",
    title: "灵动型",
    description: "身法灵动，变幻莫测",
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
