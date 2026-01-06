// 头像数据管理脚本
// 支持动态增删头像数据，包含头像原图、职业ID和称谓

// 初始头像数据
const initialAvatarData = [
  { id: 1, image: "1.jpg", professionId: "001", title: "武林盟主" },
  { id: 2, image: "2.png", professionId: "002", title: "江湖侠客" },
  { id: 3, image: "3.jpg", professionId: "003", title: "神医圣手" },
  { id: 4, image: "4.jpg", professionId: "004", title: "暗器专家" },
  { id: 5, image: "5.jpg", professionId: "005", title: "轻功大师" },
  { id: 6, image: "6.png", professionId: "006", title: "铁掌帮主" },
  { id: 7, image: "7.jpg", professionId: "007", title: "剑术宗师" },
  { id: 8, image: "8.png", professionId: "008", title: "刀客首领" },
  { id: 9, image: "9.jpg", professionId: "009", title: "拳法家" },
  { id: 10, image: "10.png", professionId: "010", title: "棍僧" },
  { id: 11, image: "1.jpg", professionId: "011", title: "剑圣" },
  { id: 12, image: "2.png", professionId: "012", title: "刀神" },
  { id: 13, image: "3.jpg", professionId: "013", title: "枪王" },
  { id: 14, image: "4.jpg", professionId: "014", title: "斧皇" },
  { id: 15, image: "5.jpg", professionId: "015", title: "锤将、" },
  { id: 16, image: "6.png", professionId: "016", title: "弓圣" },
  { id: 17, image: "7.jpg", professionId: "017", title: "弩王" },
  { id: 18, image: "8.png", professionId: "018", title: "鞭神" },
  { id: 19, image: "9.jpg", professionId: "019", title: "棒侠" },
  { id: 20, image: "10.png", professionId: "020", title: "棍圣" },
  { id: 21, image: "1.jpg", professionId: "021", title: "掌法大师" },
  { id: 22, image: "2.png", professionId: "022", title: "指法宗师" },
  { id: 23, image: "3.jpg", professionId: "023", title: "腿功高手" },
  { id: 24, image: "4.jpg", professionId: "024", title: "轻功高手" },
  { id: 25, image: "5.jpg", professionId: "025", title: "内力大师" },
  { id: 26, image: "6.png", professionId: "026", title: "外功高手" },
  { id: 27, image: "7.jpg", professionId: "027", title: "刚猛型" },
  { id: 28, image: "8.png", professionId: "028", title: "阴柔型" },
  { id: 29, image: "9.jpg", professionId: "029", title: "刚柔并济" },
  { id: 30, image: "10.png", professionId: "030", title: "灵动型" },
  { id: 31, image: "1.jpg", professionId: "031", title: "沉稳型" },
  { id: 32, image: "2.png", professionId: "032", title: "机智型" },
  { id: 33, image: "3.jpg", professionId: "033", title: "勇猛型" },
  { id: 34, image: "4.jpg", professionId: "034", title: "谨慎型" },
  { id: 35, image: "5.jpg", professionId: "035", title: "豪放型" },
  { id: 36, image: "6.png", professionId: "036", title: "内敛型" },
  { id: 37, image: "7.jpg", professionId: "037", title: "正直型" },
  { id: 38, image: "8.png", professionId: "038", title: "邪恶型" },
  { id: 39, image: "9.jpg", professionId: "039", title: "中立型" },
  { id: 40, image: "10.png", professionId: "040", title: "侠义型" },
  { id: 41, image: "1.jpg", professionId: "041", title: "阴谋型" },
  { id: 42, image: "2.png", professionId: "042", title: "豪爽型" },
  { id: 43, image: "3.jpg", professionId: "043", title: "孤僻型" },
  { id: 44, image: "4.jpg", professionId: "044", title: "开朗型" },
  { id: 45, image: "5.jpg", professionId: "045", title: "忧郁型" },
  { id: 46, image: "6.png", professionId: "046", title: "乐观型" },
  { id: 47, image: "7.jpg", professionId: "047", title: "悲观型" },
  { id: 48, image: "8.png", professionId: "048", title: "自信型" },
  { id: 49, image: "9.jpg", professionId: "049", title: "自卑型" },
  { id: 50, image: "10.png", professionId: "050", title: "勇敢型" },
  { id: 51, image: "1.jpg", professionId: "051", title: "怯懦型" },
  { id: 52, image: "2.png", professionId: "052", title: "忠诚型" },
  { id: 53, image: "3.jpg", professionId: "053", title: "背叛型" },
  { id: 54, image: "4.jpg", professionId: "054", title: "诚实型" },
  { id: 55, image: "5.jpg", professionId: "055", title: "欺诈型" },
  { id: 56, image: "6.png", professionId: "056", title: "善良型" },
  { id: 57, image: "7.jpg", professionId: "057", title: "邪恶型" },
  { id: 58, image: "8.png", professionId: "058", title: "中立型" },
  { id: 59, image: "9.jpg", professionId: "059", title: "混乱型" },
  { id: 60, image: "10.png", professionId: "060", title: "秩序型" },
  { id: 61, image: "1.jpg", professionId: "061", title: "自由型" },
];

// 头像数据管理类
class AvatarDataManager {
  constructor() {
    // 从localStorage加载数据，或者使用初始数据
    const savedData = localStorage.getItem("avatarData");
    this.avatarData = savedData
      ? JSON.parse(savedData)
      : [...initialAvatarData];
  }

  // 获取所有头像数据
  getAllAvatars() {
    return [...this.avatarData];
  }

  // 根据ID获取头像数据
  getAvatarById(id) {
    return this.avatarData.find((avatar) => avatar.id === id);
  }

  // 添加新头像
  addAvatar(avatar) {
    const newId =
      this.avatarData.length > 0
        ? Math.max(...this.avatarData.map((avatar) => avatar.id)) + 1
        : 1;
    const newAvatar = {
      id: newId,
      ...avatar,
    };
    this.avatarData.push(newAvatar);
    this.save();
    return newAvatar;
  }

  // 更新头像数据
  updateAvatar(id, updates) {
    const index = this.avatarData.findIndex((avatar) => avatar.id === id);
    if (index !== -1) {
      this.avatarData[index] = {
        ...this.avatarData[index],
        ...updates,
      };
      this.save();
      return true;
    }
    return false;
  }

  // 删除头像
  deleteAvatar(id) {
    const index = this.avatarData.findIndex((avatar) => avatar.id === id);
    if (index !== -1) {
      this.avatarData.splice(index, 1);
      this.save();
      return true;
    }
    return false;
  }

  // 保存数据到localStorage
  save() {
    localStorage.setItem("avatarData", JSON.stringify(this.avatarData));
  }

  // 重置为初始数据
  reset() {
    this.avatarData = [...initialAvatarData];
    this.save();
  }

  // 导出数据
  exportData() {
    return JSON.stringify(this.avatarData, null, 2);
  }

  // 导入数据
  importData(data) {
    try {
      const importedData = JSON.parse(data);
      if (Array.isArray(importedData)) {
        this.avatarData = importedData;
        this.save();
        return true;
      }
      return false;
    } catch (error) {
      console.error("导入数据失败:", error);
      return false;
    }
  }
}

// 创建单例实例
const avatarDataManager = new AvatarDataManager();

export default avatarDataManager;
