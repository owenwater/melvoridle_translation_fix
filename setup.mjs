
// Access the game's global context
// ctx details: https://wiki.melvoridle.com/w/Modding/SDK
export function setup(ctx) {
    console.log('Translation Fixes Mod Loaded');

    const currentLang = (typeof setLang !== 'undefined') ? setLang : 'en';

    if (currentLang === 'zh-CN') {
        console.log('Applying Simplified Chinese Translation Fixes...');
        const translationFixes = [
            // issues/4975
            { key: 'REQUIRES_POI_DISCOVERY', text: '在制图学世界地图 ${worldName} 中发现 ${placeNames}' },
            // issues/4633
            { key: 'MONSTER_NAME_Zombie', text: '僵尸' },
            { key: 'MONSTER_NAME_RagingHornedElite', text: '狂暴角龙精英' },
            // issues/4943
            { key: 'SHOP_DESCRIPTION_Iron_Pickaxe', text: '-5% 采矿间隔（来自镐子的总叠加效果：-5%）。+1% 几率每次执行动作时获得双倍矿石（来自镐子的总叠加效果：+1%）。' },
            { key: 'SHOP_DESCRIPTION_Steel_Pickaxe', text: '-5% 采矿间隔（来自镐子的总叠加效果：-10%）。+1% 几率每次执行动作时获得双倍矿石（来自镐子的总叠加效果：+2%）。' },
            { key: 'SHOP_DESCRIPTION_Black_Pickaxe', text: '-5% 采矿间隔（来自镐子的总叠加效果：-15%）。+1% 几率每次执行动作时获得双倍矿石（来自镐子的总叠加效果：+3%）。' },
            { key: 'SHOP_DESCRIPTION_Mithril_Pickaxe', text: '-5% 采矿间隔（来自镐子的总叠加效果：-20%）。+1% 几率每次执行动作时获得双倍矿石（来自镐子的总叠加效果：+4%）。' },
            { key: 'SHOP_DESCRIPTION_Adamant_Pickaxe', text: '-10% 采矿间隔（来自镐子的总叠加效果：-30%）。+1% 几率每次执行动作时获得双倍矿石（来自镐子的总叠加效果：+5%）。' },
            { key: 'SHOP_DESCRIPTION_Rune_Pickaxe', text: '-10% 采矿间隔（来自镐子的总叠加效果：-40%）。+1% 几率每次执行动作时获得双倍矿石（来自镐子的总叠加效果：+6%）。' },
            { key: 'SHOP_DESCRIPTION_Dragon_Pickaxe', text: '-10% 采矿间隔（来自镐子的总叠加效果：-50%）。+1% 几率每次执行动作时获得双倍矿石（来自镐子的总叠加效果：+7%）。' },
            // issues/4877
            { key: 'MONSTER_NAME_Chicken', text: '鸡' },
            // issues/4820
            { key: 'MENU_TEXT_COMPLETED_SLAYER_TASK_Elite', text: '你完成了 ${count} 项精英屠杀者任务' },
            // issues/4890
            { key: 'CAN_BE_USED_WITH_CURSES_AURORAS', text: '可以与诅咒和极光一起使用' },
            // issues/4224
            { key: 'ITEM_DESCRIPTION_Gem_Detector_Potion_I', text: '+2% 几率开采“宝石矿脉”或陨石矿时获得 1 枚至尊品质宝石' },
            { key: 'ITEM_DESCRIPTION_Gem_Detector_Potion_II', text: '+4% 几率开采“宝石矿脉”或陨石矿时获得 1 枚至尊品质宝石' },
            { key: 'ITEM_DESCRIPTION_Gem_Detector_Potion_III', text: '+7% 几率开采“宝石矿脉”或陨石矿时获得 1 枚至尊品质宝石' },
            { key: 'ITEM_DESCRIPTION_Gem_Detector_Potion_IV', text: '+10% 几率开采“宝石矿脉”或陨石矿时获得 1 枚至尊品质宝石' },
            // No issue
            { key: 'ARCHAEOLOGY_ARTEFACT_SIZE_medium', text: '中型' },
            { key: 'MAGIC_HOLY_INVOCATION', text: '对 ${qty1} x ${itemName} 附魔，使其埋葬后可获得 ${qty2} 祝祭点。' }
        ];

        for (const fix of translationFixes) {
            loadedLangJson[fix.key] = fix.text;
        }
    }
}