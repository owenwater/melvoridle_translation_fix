
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
            { key: 'MAGIC_HOLY_INVOCATION', text: '对 ${qty1} x ${itemName} 附魔，使其埋葬后可获得 ${qty2} 祝祭点。' },
            { key: 'MAGIC_ALTMAGIC_DESC_CursedOffering', text: ' ${fixedItemQty0} x 诅咒原木转化为 ${amount} x 诅咒灰烬。' },
            { key: 'ITEM_NAME_Mahogany_Logs', text: '桃花心木原木' },
            // Rock
            { key: 'PET_NAME_ClassyRock', text: '优雅岩' },
            { key: 'PET_NAME_CuteRock', text: '可爱岩' },
            { key: 'PET_NAME_RoyalRock', text: '皇家岩' },
            { key: 'PET_NAME_ElfRock', text: '精灵岩' },
            { key: 'PET_NAME_MagicRock', text: '魔法岩' },
            { key: 'PET_NAME_PartyRock', text: '派对岩' },
            { key: 'PET_NAME_CoolRock', text: '酷岩石' },
            { key: 'PET_NAME_FestiveCoolRock', text: '节日酷岩石' },
            { key: 'TOWNSHIP_BUILDING_Cool_Rocks', text: '酷岩石' },
            { key: 'TOWNSHIP_MENU_CAN_BUY_COOL_ROCKS', text: '允许从商店中购买酷岩石。' },
            // Golbin
            { key: 'MONSTER_NAME_Golbin', text: '戈耳宾' },
            { key: 'PET_NAME_GoldenGolbin', text: '黄金戈耳宾' },
            { key: 'THIEVING_NPC_NAME_GOLBIN', text: '戈耳宾' },
            { key: 'SHOP_DESCRIPTION_PrayerLevel', text: '戈耳宾劫掠祝祭等级 +1' },
            { key: 'SHOP_DESCRIPTION_Jerry', text: '开始戈耳宾劫掠时携带 1 份精金弯刀' },
            { key: 'GAMEMODES_GAMEMODE_RULES_Chaos_5', text: '无法游玩戈耳宾劫掠。' },
            // Augmented Stronghold
            { key: 'STRONGHOLD_TIER_AUGMENTED', text: '进阶' },
            { key: 'STRONGHOLD_TIER_AUGMENTED_NAME', text: '进阶${strongholdName}' },
            { key: 'ITEM_NAME_Undead_Enhancement_1_Augmented', text: '不死强化 1（进阶）' },
            { key: 'ITEM_NAME_Undead_Enhancement_2_Augmented', text: '不死强化 2（进阶）' },
            { key: 'ITEM_NAME_Undead_Enhancement_3_Augmented', text: '不死强化 3（进阶）' },
            { key: 'ITEM_NAME_Magic_Enhancement_1_Augmented', text: '魔法强化 1（进阶）' },
            { key: 'ITEM_NAME_Magic_Enhancement_2_Augmented', text: '魔法强化 2（进阶）' },
            { key: 'ITEM_NAME_Magic_Enhancement_3_Augmented', text: '魔法强化 3（进阶）' },
            { key: 'ITEM_NAME_Dragon_Enhancement_1_Augmented', text: '巨龙强化 1（进阶）' },
            { key: 'ITEM_NAME_Dragon_Enhancement_2_Augmented', text: '巨龙强化 2（进阶）' },
            { key: 'ITEM_NAME_Dragon_Enhancement_3_Augmented', text: '巨龙强化 3（进阶）' },
            { key: 'ITEM_NAME_Gods_Enhancement_1_Augmented', text: '诸神强化 1（进阶）' },
            { key: 'ITEM_NAME_Gods_Enhancement_2_Augmented', text: '诸神强化 2（进阶）' },
            { key: 'ITEM_NAME_Gods_Enhancement_3_Augmented', text: '诸神强化 3（进阶）' },
            { key: 'ITEM_NAME_Blighted_Enhancement_1_Augmented', text: '疫病强化 1（进阶）' },
            { key: 'ITEM_NAME_Blighted_Enhancement_2_Augmented', text: '疫病强化 2（进阶）' },
            { key: 'ITEM_NAME_Blighted_Enhancement_3_Augmented', text: '疫病强化 3（进阶）' },
            { key: 'ITEM_NAME_Fear_Enhancement_1_Augmented', text: '恐惧强化 1（进阶）' },
            { key: 'ITEM_NAME_Fear_Enhancement_2_Augmented', text: '恐惧强化 2（进阶）' },
            { key: 'ITEM_NAME_Fear_Enhancement_3_Augmented', text: '恐惧强化 3（进阶）' },
            { key: 'ITEM_NAME_Nightmare_Enhancement_1_Augmented', text: '噩梦强化 1（进阶）' },
            { key: 'ITEM_NAME_Nightmare_Enhancement_2_Augmented', text: '噩梦强化 2（进阶）' },
            { key: 'ITEM_NAME_Nightmare_Enhancement_3_Augmented', text: '噩梦强化 3（进阶）' },
            { key: 'ITEM_NAME_Overlords_Enhancement_1_Augmented', text: '领主强化 1（进阶）' },
            { key: 'ITEM_NAME_Overlords_Enhancement_2_Augmented', text: '领主强化 2（进阶）' },
            { key: 'ITEM_NAME_Overlords_Enhancement_3_Augmented', text: '领主强化 3（进阶）' },
            { key: 'ITEM_NAME_Undead_Enhancement_Scroll_Augmented', text: '不死强化卷轴（进阶）' },
            { key: 'ITEM_NAME_Magic_Enhancement_Scroll_Augmented', text: '魔法强化卷轴（进阶）' },
            { key: 'ITEM_NAME_Dragon_Enhancement_Scroll_Augmented', text: '巨龙强化卷轴（进阶）' },
            { key: 'ITEM_NAME_Gods_Enhancement_Scroll_Augmented', text: '诸神强化卷轴（进阶）' },
            { key: 'ITEM_NAME_Blighted_Enhancement_Scroll_Augmented', text: '疫病强化卷轴（进阶）' },
            { key: 'ITEM_NAME_Fear_Enhancement_Scroll_Augmented', text: '恐惧强化卷轴（进阶）' },
            { key: 'ITEM_NAME_Nightmare_Enhancement_Scroll_Augmented', text: '噩梦强化卷轴（进阶）' },
            { key: 'ITEM_NAME_Overlords_Enhancement_Scroll_Augmented', text: '领主强化卷轴（进阶）' },
            { key: 'PASSIVES_NAME_AugmentedStrongholdBuff', text: '要塞增益（进阶）' },
            { key: 'PASSIVES_NAME_AugmentedAbyssalStrongholdBuff', text: '深渊要塞增益（进阶）' },
            // Preservation Cap
            { key: 'MODIFIER_DATA_skillPreservationCapRealm', text: '${value}% 使用${skillName}时的留存资源几率上限（仅限${realmName}）' },
            { key: 'MODIFIER_DATA_skillPreservationCap', text: '${value}% 使用技能时的留存资源几率上限' },
            { key: 'MODIFIER_DATA_skillPreservationCapGlobalRealm', text: '${value}% 使用技能时的留存资源几率上限（仅限${realmName}）' },
            // Story
            { key: 'LORE_PARAGRAPH_5_2', search: /无缘.+故/g, replace: '无缘无故' },
            { key: 'LORE_PARAGRAPH_7_3', search: /统治着/g, replace: '统治者' },
        ];

        for (const fix of translationFixes) {
            if (fix.text) {
                loadedLangJson[fix.key] = fix.text;
            } else if (fix.search && fix.replace) {
                if (loadedLangJson[fix.key]) {
                    loadedLangJson[fix.key] = loadedLangJson[fix.key].replace(fix.search, fix.replace);
                }
            }
        }
    }
}