// Darkest Dungeon Estate Guide - Game Data
// REGIONS, BOSSES, DD_RUNS, PROVISIONS, CLASSES, POS_QUIRKS, NEG_QUIRKS, BUILDINGS

const REGIONS = {
ruins: {
teams: [
{
label: “Team A - High Damage”,
4: { main:“Arbalest”, mS:[“Sniper Shot”,“Rallying Flare”,“Blindfire”,“Bola”], sub:“Highwayman”, sS:[“Point Blank Shot”,“Pistol Shot”,“Tracking Shot”,“Open Vein”] },
3: { main:“Plague Doctor”, mS:[“Noxious Blast”,“Blinding Gas”,“Battlefield Medicine”,“Disorienting Blast”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Sacrificial Stab”] },
2: { main:“Hellion”, mS:[“Wicked Hack”,“Iron Swan”,“If It Bleeds”,“YAWP!”], sub:“Bounty Hunter”, sS:[“Collect Bounty”,“Mark for Death”,“Flashbang”,“Finish Him”] },
1: { main:“Crusader”, mS:[“Smite”,“Holy Lance”,“Stunning Blow”,“Inspiring Cry”], sub:“Flagellant”, sS:[“Punish”,“Rain of Sorrows”,“Redeem”,“Reclaim”] }
},
{
label: “Team B - Balanced Sustain”,
4: { main:“Vestal”, mS:[“Judgment”,“Dazzling Light”,“Divine Grace”,“Divine Comfort”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Sacrificial Stab”] },
3: { main:“Occultist”, mS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Sacrificial Stab”], sub:“Jester”, sS:[“Battle Ballad”,“Inspiring Tune”,“Slice Off”,“Harvest”] },
2: { main:“Crusader”, mS:[“Smite”,“Holy Lance”,“Stunning Blow”,“Inspiring Cry”], sub:“Leper”, sS:[“Chop”,“Hew”,“Purge”,“Withstand”] },
1: { main:“Man-at-Arms”, mS:[“Crush”,“Rampart”,“Defender”,“Retribution”], sub:“Leper”, sS:[“Chop”,“Hew”,“Purge”,“Withstand”] }
},
{
label: “Team C - Antiquarian Loot”,
4: { main:“Vestal”, mS:[“Judgment”,“Dazzling Light”,“Divine Grace”,“Divine Comfort”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Sacrificial Stab”] },
3: { main:“Highwayman”, mS:[“Duelist’s Advance”,“Point Blank Shot”,“Pistol Shot”,“Tracking Shot”], sub:“Houndmaster”, sS:[“Hound’s Rush”,“Target Whistle”,“Guard Dog”,“Lick Wounds”] },
2: { main:“Antiquarian”, mS:[“Flashpowder”,“Protect Me!”,“Nervous Stab”,“Invigorating Vapours”], sub:“Plague Doctor”, sS:[“Noxious Blast”,“Blinding Gas”,“Battlefield Medicine”,“Disorienting Blast”] },
1: { main:“Man-at-Arms”, mS:[“Crush”,“Rampart”,“Defender”,“Bolster”], sub:“Crusader”, sS:[“Smite”,“Holy Lance”,“Stunning Blow”,“Inspiring Cry”] }
}
]
},
weald: {
teams: [
{
label: “Team A - Bleed and Mark”,
4: { main:“Plague Doctor”, mS:[“Noxious Blast”,“Blinding Gas”,“Battlefield Medicine”,“Disorienting Blast”], sub:“Arbalest”, sS:[“Sniper Shot”,“Rallying Flare”,“Blindfire”,“Bola”] },
3: { main:“Grave Robber”, mS:[“Thrown Dagger”,“Pick to the Face”,“Shadow Fade”,“Lunge”], sub:“Highwayman”, sS:[“Duelist’s Advance”,“Point Blank Shot”,“Pistol Shot”,“Tracking Shot”] },
2: { main:“Houndmaster”, mS:[“Hound’s Rush”,“Target Whistle”,“Cry Havoc”,“Lick Wounds”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Pull of the Abyss”,“Sacrificial Stab”] },
1: { main:“Bounty Hunter”, mS:[“Collect Bounty”,“Mark for Death”,“Flashbang”,“Finish Him”], sub:“Hellion”, sS:[“Wicked Hack”,“Iron Swan”,“If It Bleeds”,“YAWP!”] }
},
{
label: “Team B - Control and Ranged”,
4: { main:“Jester”, mS:[“Battle Ballad”,“Inspiring Tune”,“Slice Off”,“Harvest”], sub:“Vestal”, sS:[“Judgment”,“Dazzling Light”,“Divine Grace”,“Divine Comfort”] },
3: { main:“Arbalest”, mS:[“Sniper Shot”,“Rallying Flare”,“Blindfire”,“Bola”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Pull of the Abyss”,“Sacrificial Stab”] },
2: { main:“Occultist”, mS:[“Wyrd Reconstruction”,“Weakening Curse”,“Pull of the Abyss”,“Sacrificial Stab”], sub:“Crusader”, sS:[“Smite”,“Holy Lance”,“Stunning Blow”,“Inspiring Cry”] },
1: { main:“Man-at-Arms”, mS:[“Crush”,“Rampart”,“Defender”,“Bolster”], sub:“Houndmaster”, sS:[“Hound’s Rush”,“Target Whistle”,“Cry Havoc”,“Lick Wounds”] }
},
{
label: “Team C - Antiquarian Loot”,
4: { main:“Vestal”, mS:[“Judgment”,“Dazzling Light”,“Divine Grace”,“Divine Comfort”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Pull of the Abyss”,“Sacrificial Stab”] },
3: { main:“Highwayman”, mS:[“Duelist’s Advance”,“Point Blank Shot”,“Pistol Shot”,“Tracking Shot”], sub:“Bounty Hunter”, sS:[“Collect Bounty”,“Mark for Death”,“Flashbang”,“Finish Him”] },
2: { main:“Houndmaster”, mS:[“Hound’s Rush”,“Target Whistle”,“Guard Dog”,“Lick Wounds”], sub:“Bounty Hunter”, sS:[“Collect Bounty”,“Mark for Death”,“Flashbang”,“Finish Him”] },
1: { main:“Antiquarian”, mS:[“Flashpowder”,“Protect Me!”,“Nervous Stab”,“Invigorating Vapours”], sub:“Man-at-Arms”, sS:[“Crush”,“Rampart”,“Defender”,“Bolster”] }
}
]
},
warrens: {
teams: [
{
label: “Team A - Beast Bleed Core”,
4: { main:“Highwayman”, mS:[“Duelist’s Advance”,“Point Blank Shot”,“Pistol Shot”,“Tracking Shot”], sub:“Grave Robber”, sS:[“Thrown Dagger”,“Pick to the Face”,“Shadow Fade”,“Lunge”] },
3: { main:“Plague Doctor”, mS:[“Noxious Blast”,“Blinding Gas”,“Battlefield Medicine”,“Disorienting Blast”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Pull of the Abyss”] },
2: { main:“Flagellant”, mS:[“Punish”,“Rain of Sorrows”,“Redeem”,“Reclaim”], sub:“Bounty Hunter”, sS:[“Collect Bounty”,“Mark for Death”,“Flashbang”,“Finish Him”] },
1: { main:“Houndmaster”, mS:[“Hound’s Rush”,“Target Whistle”,“Cry Havoc”,“Lick Wounds”], sub:“Hellion”, sS:[“Wicked Hack”,“Iron Swan”,“If It Bleeds”,“YAWP!”] }
},
{
label: “Team B - Balanced Survivability”,
4: { main:“Vestal”, mS:[“Judgment”,“Dazzling Light”,“Divine Grace”,“Divine Comfort”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Pull of the Abyss”] },
3: { main:“Occultist”, mS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Pull of the Abyss”], sub:“Plague Doctor”, sS:[“Noxious Blast”,“Blinding Gas”,“Battlefield Medicine”,“Disorienting Blast”] },
2: { main:“Bounty Hunter”, mS:[“Collect Bounty”,“Mark for Death”,“Flashbang”,“Finish Him”], sub:“Houndmaster”, sS:[“Hound’s Rush”,“Target Whistle”,“Cry Havoc”,“Lick Wounds”] },
1: { main:“Man-at-Arms”, mS:[“Crush”,“Rampart”,“Defender”,“Bolster”], sub:“Flagellant”, sS:[“Punish”,“Rain of Sorrows”,“Redeem”,“Reclaim”] }
},
{
label: “Team C - Antiquarian Loot”,
4: { main:“Jester”, mS:[“Battle Ballad”,“Inspiring Tune”,“Slice Off”,“Harvest”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Pull of the Abyss”] },
3: { main:“Hellion”, mS:[“Wicked Hack”,“Iron Swan”,“If It Bleeds”,“YAWP!”], sub:“Highwayman”, sS:[“Duelist’s Advance”,“Point Blank Shot”,“Pistol Shot”,“Tracking Shot”] },
2: { main:“Man-at-Arms”, mS:[“Crush”,“Rampart”,“Defender”,“Bolster”], sub:“Flagellant”, sS:[“Punish”,“Rain of Sorrows”,“Redeem”,“Reclaim”] },
1: { main:“Antiquarian”, mS:[“Flashpowder”,“Protect Me!”,“Nervous Stab”,“Invigorating Vapours”], sub:“Houndmaster”, sS:[“Hound’s Rush”,“Target Whistle”,“Cry Havoc”,“Lick Wounds”] }
}
]
},
cove: {
teams: [
{
label: “Team A - Blight and Control”,
4: { main:“Arbalest”, mS:[“Sniper Shot”,“Rallying Flare”,“Blindfire”,“Bola”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Pull of the Abyss”] },
3: { main:“Plague Doctor”, mS:[“Noxious Blast”,“Blinding Gas”,“Battlefield Medicine”,“Disorienting Blast”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Sacrificial Stab”] },
2: { main:“Shieldbreaker”, mS:[“Pierce”,“Puncture”,“Snake Skin”,“Expose Weakness”], sub:“Highwayman”, sS:[“Duelist’s Advance”,“Point Blank Shot”,“Tracking Shot”,“Open Vein”] },
1: { main:“Occultist”, mS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Pull of the Abyss”], sub:“Man-at-Arms”, sS:[“Crush”,“Rampart”,“Defender”,“Retribution”] }
},
{
label: “Team B - Stress and Damage”,
4: { main:“Vestal”, mS:[“Judgment”,“Dazzling Light”,“Divine Grace”,“Divine Comfort”], sub:“Occultist”, sS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Pull of the Abyss”] },
3: { main:“Jester”, mS:[“Battle Ballad”,“Inspiring Tune”,“Slice Off”,“Harvest”], sub:“Plague Doctor”, sS:[“Noxious Blast”,“Blinding Gas”,“Battlefield Medicine”,“Disorienting Blast”] },
2: { main:“Hellion”, mS:[“Wicked Hack”,“Iron Swan”,“If It Bleeds”,“YAWP!”], sub:“Shieldbreaker”, sS:[“Pierce”,“Puncture”,“Snake Skin”,“Expose Weakness”] },
1: { main:“Flagellant”, mS:[“Punish”,“Rain of Sorrows”,“Redeem”,“Reclaim”], sub:“Houndmaster”, sS:[“Hound’s Rush”,“Target Whistle”,“Cry Havoc”,“Lick Wounds”] }
},
{
label: “Team C - Antiquarian Loot”,
4: { main:“Man-at-Arms”, mS:[“Crush”,“Rampart”,“Defender”,“Bolster”], sub:“Jester”, sS:[“Battle Ballad”,“Inspiring Tune”,“Slice Off”,“Harvest”] },
3: { main:“Occultist”, mS:[“Wyrd Reconstruction”,“Weakening Curse”,“Hands from Below”,“Pull of the Abyss”], sub:“Plague Doctor”, sS:[“Noxious Blast”,“Blinding Gas”,“Battlefield Medicine”,“Disorienting Blast”] },
2: { main:“Highwayman”, mS:[“Duelist’s Advance”,“Point Blank Shot”,“Pistol Shot”,“Tracking Shot”], sub:“Grave Robber”, sS:[“Thrown Dagger”,“Pick to the Face”,“Shadow Fade”,“Lunge”] },
1: { main:“Antiquarian”, mS:[“Flashpowder”,“Protect Me!”,“Nervous Stab”,“Invigorating Vapours”], sub:“Man-at-Arms”, sS:[“Crush”,“Rampart”,“Defender”,“Bolster”] }
}
]
}
};
const BOSSES = [
{
name:“The Necromancer”,
region:“Ruins”,
tiers:“Apprentice / Veteran / Champion”,
teams:[
{ label:“Primary”, heroes:“Vestal · Plague Doctor · Highwayman · Crusader” },
{ label:“Alternate”, heroes:“Arbalest · Occultist · Bounty Hunter · Hellion” }
],
mechanics:[
“Summons Bone Courtiers and Bone Soldiers - clear them or get overwhelmed”,
“Deal damage to push him to Phase 2 faster - he heals on summon turns”,
“Backline reach required: Ruins enemies sit in rows 3-4”,
“Crusader’s Smite deals 33% bonus to Unholy - slot him”,
“Necromancer Lord variant (Veteran+): has self-heal - sustained pressure needed”
],
avoid:[
“Never leave summoned Courtiers alive - they can out-sustain your damage”,
“Avoid all-bleed team - undead are immune to bleed”,
“Don’t camp-heal mid-fight if summons are active”
]
},
{
name:“The Swine Prince”,
region:“Weald”,
tiers:“Apprentice / Veteran / Champion”,
teams:[
{ label:“Primary”, heroes:“Arbalest · Occultist · Houndmaster · Man-at-Arms” },
{ label:“Alternate”, heroes:“Vestal · Jester · Highwayman · Hellion” }
],
mechanics:[
“NEVER hit Wilbur - Swine King enters rage mode and wipes the party”,
“Kill Wilbur LAST or let him live - he does minimal damage alone”,
“Focus all damage on Swine King until he’s dead”,
“Arbalest’s Bola is crucial to prevent Wilbur buffing”,
“HM’s Hound Rush + Blackjack can stun Wilbur to skip his buff turns”
],
avoid:[
“⚠ CRITICAL: ANY hit on Wilbur causes Swine King frenzy - AoEs excluded ONLY if Wilbur is dead”,
“Don’t bring multi-target abilities if Wilbur is alive”,
“Never rely on random targeting heroes (Leper, Abomination transformation)”
]
},
{
name:“The Hag”,
region:“Weald”,
tiers:“Apprentice / Veteran / Champion”,
teams:[
{ label:“Primary”, heroes:“Occultist · Plague Doctor · Highwayman · Jester” },
{ label:“Alternate”, heroes:“Arbalest · Bounty Hunter · Man-at-Arms · Vestal” }
],
mechanics:[
“She traps a hero in the cauldron - that hero can’t act and takes damage each round”,
“Skills that can hit rank 4 are critical: PBS, Occultist Stab, Arbalest Sniper”,
“Jester’s Finale or Arbalest’s Sniper can reach her in the back”,
“Heal the trapped hero - they still take DoT damage inside”,
“Stress heal essential - this fight is a war of attrition”
],
avoid:[
“Don’t bring heroes with no rank 4 range - you’ll have a dead slot constantly”,
“Never let the cauldron DoT go unhealed”,
“Avoid slow teams - she heals herself at certain health thresholds”
]
},
{
name:“The Drowned Crew / Brigand Pounder”,
region:“Warrens / Weald”,
tiers:“Apprentice / Veteran / Champion”,
teams:[
{ label:“Pounder Primary”, heroes:“Plague Doctor · Bounty Hunter · Houndmaster · Vestal” },
{ label:“Drowned Primary”, heroes:“Occultist · Hellion · Flagellant · Vestal” }
],
mechanics:[
“Brigand Pounder: destroy it in 3 turns before it fires - BH Finish Him after Flare”,
“Kill Fuseman and Matchman before Pounder is armed or wipe is imminent”,
“Drowned Crew: kill the Drowned Sailor first - he can summon more crew endlessly”,
“High bleed synergy against Drowned (human subtype despite appearance)”,
“Jester’s Finale can chain-delete the Brigand Pounder immediately”
],
avoid:[
“Never let Matchman survive a turn with Pounder armed”,
“Don’t neglect stress - both fights generate massive stress”,
“Avoid single-target-only comps for Pounder fight”
]
},
{
name:“The Siren”,
region:“Cove”,
tiers:“Apprentice / Veteran / Champion”,
teams:[
{ label:“Primary”, heroes:“Vestal · Plague Doctor · Shieldbreaker · Man-at-Arms” },
{ label:“Alternate”, heroes:“Occultist · Arbalest · Highwayman · Houndmaster” }
],
mechanics:[
“She will charm a hero - they fight for her side for 1-3 turns”,
“Charmed heroes take reduced damage - but can be hit to break charm faster”,
“Shieldbreaker Pierce bypasses her high protection”,
“Keep stress low going in - charmed heroes use all their abilities”,
“MAA’s Guard can protect party from charmed hero’s attacks”
],
avoid:[
“Never bring heroes with high AoE damage - they’ll massacre your own party when charmed”,
“Don’t stack on bleed - Cove enemies resist it strongly”,
“Avoid bringing Abomination - transformation while charmed is catastrophic”
]
},
{
name:“The Flesh”,
region:“Warrens”,
tiers:“Apprentice / Veteran / Champion”,
teams:[
{ label:“Primary”, heroes:“Plague Doctor · Occultist · Flagellant · Vestal” },
{ label:“Alternate”, heroes:“Arbalest · Bounty Hunter · Man-at-Arms · Houndmaster” }
],
mechanics:[
“The Flesh has multiple body parts - Twitching Column is highest priority kill”,
“Immovable - no position shuffling. Static team compositions work”,
“Blight is extremely effective - stack it on body parts and wait”,
“Corroded Body variant (Champion): applies disease - PD mandatory”,
“High HP pool - this is a sustained fight. Full healing comp is viable”
],
avoid:[
“Never ignore Twitching Column - it buffs the fight dramatically”,
“Avoid running out of heals - Flesh hits hard and has many parts”,
“Don’t forget food: fight can run 8-12 rounds”
]
},
{
name:“The Collector”,
region:“All (Roaming)”,
tiers:“Veteran / Champion”,
teams:[
{ label:“Primary”, heroes:“Vestal · Plague Doctor · Houndmaster · Highwayman” },
{ label:“Alternate”, heroes:“Arbalest · Occultist · Man-at-Arms · Crusader” }
],
mechanics:[
“Summons ‘Head’ versions of your dead heroes - they inherit some stats”,
“Kill the Heads immediately - they deal significant damage”,
“Collector himself has moderate HP but stuns and debuffs constantly”,
“Bring stun resist trinkets - stun resist is key to surviving his turns”,
“AoE skills excell here - three targets present constantly”
],
avoid:[
“Never walk into a Collector fight under-provisioned”,
“Don’t neglect the summoned heads - they will pile up fast”,
“Avoid heroes with virtuous-dependent strategies - RNG heavy fight”
]
}
];
const DD_RUNS = [
{
name:“Raid 1 - We Are the Flame”,
subtitle:“Shuffling Horror”,
team:“Highwayman · Crusader · Jester · Vestal”,
desc:“The first foray is manageable but deceptive. Enemy shuffles are constant - heroes get displaced constantly.”,
key:[
“Every enemy shuffles your party - bring heroes that function from multiple positions”,
“Highwayman works from positions 1-3, making him invaluable here”,
“Crusader’s Inspiring Cry provides emergency stress healing mid-combat”,
“Vestal must stay in position 4 - protect her above all else”,
“The final boss applies extreme stress - virtuous heroes are far safer”
],
watch:[
“Position shuffles can strand your healer in slot 1”,
“Stress accumulates fast - manage it between rooms with Jester’s tune”,
“Bring extra bandages - bleed sources are present”
]
},
{
name:“Raid 2 - Lighting the Way”,
subtitle:“Templar Onslaught”,
team:“Arbalest · Houndmaster · Man-at-Arms · Vestal”,
desc:“Three Ancestor’s Talismans must be found and brought to the Shuffling Horror. Templars hit extremely hard.”,
key:[
“Collect all 3 Talismans before the final room - they’re mandatory”,
“MAA’s Defender/Guard is crucial - Templars focus single targets”,
“Arbalest’s Rallying Flare provides reliable stress management for the team”,
“Houndmaster’s Cry Havoc applies debuffs to the large Templar groups”,
“Bring maximum torches - this dungeon has severe darkness penalties”
],
watch:[
“Never rush - exploration is mandatory to find all 3 Talismans”,
“Templar Impaler hits backline - protect your Vestal”,
“Stress builds rapidly from Templars’ special attacks”
]
},
{
name:“Raid 3 - Belly of the Beast”,
subtitle:“Exhaustion Marathon”,
team:“Plague Doctor · Highwayman · Occultist · Hellion”,
desc:“The longest and most punishing foray. Exhaustion and disease are everywhere. Resource management defines success.”,
key:[
“PD’s Battlefield Medicine is mandatory - disease stacks rapidly here”,
“Occultist heal variance is risky but his debuffs and reach are essential”,
“Hellion from position 1 with YAWP keeps stress under control via stuns”,
“Camp aggressively - this run will require 2-3 camps minimum”,
“Bring extra food, herbs, bandages beyond what you think you need”
],
watch:[
“Exhaustion forces heroes to skip turns - plan for it”,
“Disease stacks reduce max HP - PD must cleanse constantly”,
“The run is extremely long - heroes will accumulate multiple quirks”
]
},
{
name:“Raid 4 - Hell is in the Heart”,
subtitle:“Final Confrontation”,
team:“Crusader · Highwayman · Jester · Vestal”,
desc:“The final battle against the Heart of Darkness. Your best heroes meet their destiny. Choose your sacrifices.”,
key:[
“The Heart has three phases - each with different priority targets”,
“Phase 1: Kill the Coagulated Heart first to stop guaranteed crits”,
“Phase 2: Manage stress - Jester’s Finale as finisher for phase 2 body”,
“Phase 3: The Heart itself attacks every hero - full healing focus”,
“Crusader is the single best hero here - Holy damage + stress heal + self-sustain”
],
watch:[
“Heroes who complete this run are Resolute - they cannot re-enter the DD”,
“Bring your most virtuous, least quirk-burdened heroes - mortality is real”,
“Don’t bring irreplaceable heroes unless you must - acceptable sacrifice is strategy”
]
}
];
const PROVISIONS = {
short: {
rooms:“3-5 rooms”,
note:“Short dungeons are resource-light. Conserve for future runs.”,
regions:{
ruins:  [[“Torch”,“4”,“Standard”],[“Food”,“4”,“Prevent hunger dmg”],[“Medicinal Herbs”,“1”,“Disease clear”],[“Antivenom”,“1”,“Precaution”],[“Holy Water”,“1”,“Curio use”],[“Bandage”,“1”,“Precaution”]],
weald:  [[“Torch”,“4”,””],[“Food”,“6”,“Fungal disease”],[“Antivenom”,“2”,“Disease likely”],[“Bandage”,“2”,“Bleed”],[“Medicinal Herbs”,“2”,“Multi-disease risk”],[“Holy Water”,“0”,“Not useful”]],
warrens:[[“Torch”,“4”,””],[“Food”,“5”,””],[“Antivenom”,“3”,“Disease heavy”],[“Bandage”,“2”,””],[“Medicinal Herbs”,“2”,””],[“Laudanum”,“1”,“Stress”]],
cove:   [[“Torch”,“4”,””],[“Food”,“4”,””],[“Antivenom”,“1”,””],[“Bandage”,“3”,“Bleed focus”],[“Holy Water”,“1”,””],[“Shovel”,“1”,“Obstacles”]]
}
},
medium: {
rooms:“6-8 rooms”,
note:“Standard provisioning tier. One camp typically needed.”,
regions:{
ruins:  [[“Torch”,“8”,””],[“Food”,“8”,””],[“Medicinal Herbs”,“2”,””],[“Antivenom”,“2”,””],[“Holy Water”,“2”,“Curio + undead”],[“Bandage”,“2”,””],[“Shovel”,“1”,””],[“Key”,“1”,“Locked curios”]],
weald:  [[“Torch”,“8”,””],[“Food”,“10”,“Fungal disease +33%”],[“Antivenom”,“4”,””],[“Bandage”,“4”,“Bleed”],[“Medicinal Herbs”,“3”,””],[“Shovel”,“2”,””],[“Holy Water”,“1”,””],[“Laudanum”,“1”,””]],
warrens:[[“Torch”,“8”,””],[“Food”,“8”,””],[“Antivenom”,“5”,“Disease endemic”],[“Bandage”,“3”,””],[“Medicinal Herbs”,“3”,””],[“Laudanum”,“2”,“Stress endemic”],[“Shovel”,“1”,””],[“Key”,“1”,””]],
cove:   [[“Torch”,“8”,””],[“Food”,“8”,””],[“Antivenom”,“2”,””],[“Bandage”,“4”,””],[“Holy Water”,“2”,””],[“Shovel”,“2”,“Obstacles common”],[“Laudanum”,“1”,””],[“Key”,“1”,””]]
}
},
long: {
rooms:“9-12 rooms”,
note:“Full provisioning. Two camps required. Bring maximum curio items.”,
regions:{
ruins:  [[“Torch”,“12”,””],[“Food”,“12”,””],[“Medicinal Herbs”,“3”,””],[“Antivenom”,“3”,””],[“Holy Water”,“4”,””],[“Bandage”,“3”,””],[“Shovel”,“2”,””],[“Key”,“2”,””],[“Laudanum”,“2”,””],[“Skeleton Key”,“1”,””]],
weald:  [[“Torch”,“12”,””],[“Food”,“16”,“Fungal: pack extra”],[“Antivenom”,“6”,””],[“Bandage”,“6”,””],[“Medicinal Herbs”,“4”,””],[“Shovel”,“3”,””],[“Holy Water”,“1”,””],[“Laudanum”,“2”,””],[“Key”,“2”,””],[“Skeleton Key”,“1”,””]],
warrens:[[“Torch”,“12”,””],[“Food”,“12”,””],[“Antivenom”,“8”,“Max antivenom”],[“Bandage”,“4”,””],[“Medicinal Herbs”,“4”,””],[“Laudanum”,“3”,””],[“Shovel”,“2”,””],[“Key”,“2”,””],[“Skeleton Key”,“1”,””],[“Holy Water”,“1”,””]],
cove:   [[“Torch”,“12”,””],[“Food”,“12”,””],[“Antivenom”,“3”,””],[“Bandage”,“6”,””],[“Holy Water”,“3”,””],[“Shovel”,“3”,””],[“Laudanum”,“2”,””],[“Key”,“2”,””],[“Skeleton Key”,“1”,””],[“Medicinal Herbs”,“2”,””]]
}
}
};
const CLASSES = [“Antiquarian”,“Arbalest”,“Abomination”,“Bounty Hunter”,“Crusader”,“Flagellant”,“Grave Robber”,“Hellion”,“Highwayman”,“Houndmaster”,“Jester”,“Leper”,“Man-at-Arms”,“Occultist”,“Plague Doctor”,“Shieldbreaker”,“Vestal”];
const POS_QUIRKS = [
// ── GENERAL STAT ──────────────────────────────────────
{ name:“Tough”,            effect:”+10% Max HP - straight survivability”, keep:“Lock”, category:“general”,
synergy:{}, score:7 },
{ name:“Hard Skinned”,     effect:”+5 PROT - reduces all incoming damage”, keep:“Lock”, category:“general”,
synergy:{}, score:7 },
{ name:“Quick Reflexes”,   effect:”+2 SPD - better action order every round”, keep:“Lock”, category:“general”,
synergy:{}, score:8 },
{ name:“Natural Swing”,    effect:”+5 ACC - hits land more consistently”, keep:“Lock”, category:“general”,
synergy:{}, score:7 },
{ name:“Evasive”,          effect:”+5 DODGE - harder to hit”, keep:“Lock”, category:“general”,
synergy:{}, score:6 },
{ name:“Accurate”,         effect:”+1% CRIT - small but permanent crit boost”, keep:“Situational”, category:“general”,
synergy:{}, score:5 },
{ name:“Luminous”,         effect:”+2 SPD, +5 DODGE - global, always active”, keep:“Lock”, category:“general”,
synergy:{}, score:9 },

// ── CONDITIONAL ──────────────────────────────────────
{ name:“On Guard”,         effect:”(Round 1) +4 SPD, +5 DODGE - excellent initiative”, keep:“Lock”, category:“conditional”,
synergy:{}, score:7 },
{ name:“Quick Draw”,       effect:”(Round 1) +4 SPD - good initiative”, keep:“Situational”, category:“conditional”,
synergy:{}, score:5 },
{ name:“Precision Striker”,effect:”(Melee) +3% CRIT - lock on melee damage dealers”, keep:“Lock”, category:“conditional”,
synergy:{}, score:7 },
{ name:“Slugger”,          effect:”(Melee) +10% DMG - strong on frontline bruisers”, keep:“Lock”, category:“conditional”,
synergy:{}, score:8 },
{ name:“Unerring”,         effect:”(Ranged) +10% DMG - must-lock on ranged heroes”, keep:“Lock”, category:“conditional”,
synergy:{}, score:9 },
{ name:“Natural Eye”,      effect:”(Ranged) +5 ACC - pairs with Unerring nicely”, keep:“Lock”, category:“conditional”,
synergy:{}, score:6 },
{ name:“Eagle Eye”,        effect:”(Ranged) +3% CRIT - good on Arbalest/HWM”, keep:“Lock”, category:“conditional”,
synergy:{}, score:7 },
{ name:“Second Wind”,      effect:”(HP <50%) +10% DMG - activates near death”, keep:“Situational”, category:“conditional”,
synergy:{}, score:5 },
{ name:“Last Gasp”,        effect:”(HP <50%) +1 SPD - speed boost when low”, keep:“Situational”, category:“conditional”,
synergy:{}, score:4 },
{ name:“Clutch Hitter”,    effect:”(HP <50%) +3% CRIT - synergizes with Flagellant”, keep:“Situational”, category:“conditional”,
synergy:{}, score:5 },
{ name:“Fast Healer”,      effect:”(Camping) +20% Heal received - strong for tanky heroes”, keep:“Lock”, category:“conditional”,
synergy:{}, score:7 },
{ name:“Stout”,            effect:”(Camping) +20% Heal received - same as Fast Healer”, keep:“Lock”, category:“conditional”,
synergy:{}, score:7 },
{ name:“Back Tracker”,     effect:”(Walking backwards) -100% Stress DMG”, keep:“Situational”, category:“conditional”,
synergy:{}, score:4 },

// ── LIGHT-RELATED ────────────────────────────────────
{ name:“Early Riser”,      effect:”(Light >75) +2 SPD - reward for high torch play”, keep:“Situational”, category:“light”,
synergy:{bonusRegions:[‘ruins’,‘weald’,‘warrens’,‘cove’]}, score:6 },
{ name:“Night Owl”,        effect:”(Light <25) +2 SPD - dark torch specialist”, keep:“Situational”, category:“light”,
synergy:{}, score:5 },
{ name:“Warrior of Light”, effect:”(Light >75) +10% DMG - strong high-torch bonus”, keep:“Lock”, category:“light”,
synergy:{bonusRegions:[‘ruins’,‘weald’,‘warrens’,‘cove’]}, score:8 },
{ name:“Lurker”,           effect:”(Light <25) +10% DMG - dark dungeon specialist”, keep:“Situational”, category:“light”,
synergy:{}, score:6 },
{ name:“Photomania”,       effect:”(Light >75) -10% Stress DMG received”, keep:“Situational”, category:“light”,
synergy:{bonusRegions:[‘ruins’,‘weald’,‘warrens’,‘cove’]}, score:5 },

// ── REGION-SPECIFIC ───────────────────────────────────
{ name:“Ruins Tactician”,  effect:”(Ruins) +15% DMG - pure damage in the Ruins”, keep:“Lock”, category:“region”,
synergy:{bonusRegions:[‘ruins’]}, score:10 },
{ name:“Weald Tactician”,  effect:”(Weald) +15% DMG - pure damage in the Weald”, keep:“Lock”, category:“region”,
synergy:{bonusRegions:[‘weald’]}, score:10 },
{ name:“Warrens Tactician”,effect:”(Warrens) +15% DMG - pure damage in the Warrens”, keep:“Lock”, category:“region”,
synergy:{bonusRegions:[‘warrens’]}, score:10 },
{ name:“Cove Tactician”,   effect:”(Cove) +15% DMG - pure damage in the Cove”, keep:“Lock”, category:“region”,
synergy:{bonusRegions:[‘cove’]}, score:10 },
{ name:“Ruins Adventurer”, effect:”(Ruins) +15% Stress Resist - stress defense in Ruins”, keep:“Lock”, category:“region”,
synergy:{bonusRegions:[‘ruins’]}, score:9 },
{ name:“Weald Adventurer”, effect:”(Weald) +15% Stress Resist - stress defense in Weald”, keep:“Lock”, category:“region”,
synergy:{bonusRegions:[‘weald’]}, score:9 },
{ name:“Warrens Adventurer”,effect:”(Warrens) +15% Stress Resist - stress defense in Warrens”, keep:“Lock”, category:“region”,
synergy:{bonusRegions:[‘warrens’]}, score:9 },
{ name:“Cove Adventurer”,  effect:”(Cove) -20% Stress received - exceptional Cove stress defense”, keep:“Lock”, category:“region”,
synergy:{bonusRegions:[‘cove’]}, score:10 },
{ name:“Ruins Explorer”,   effect:”(Ruins) +20% Scouting Chance - reveal rooms early”, keep:“Situational”, category:“region”,
synergy:{bonusRegions:[‘ruins’]}, score:5 },
{ name:“Weald Explorer”,   effect:”(Weald) +20% Scouting Chance”, keep:“Situational”, category:“region”,
synergy:{bonusRegions:[‘weald’]}, score:5 },
{ name:“Warrens Explorer”, effect:”(Warrens) +20% Scouting Chance”, keep:“Situational”, category:“region”,
synergy:{bonusRegions:[‘warrens’]}, score:5 },
{ name:“Cove Explorer”,    effect:”(Cove) +10% Scouting Chance - avoids ambushes”, keep:“Situational”, category:“region”,
synergy:{bonusRegions:[‘cove’]}, score:4 },
{ name:“Cove Scrounger”,   effect:”(Cove) +5% Scouting Chance - weaker version of Explorer”, keep:“Situational”, category:“region”,
synergy:{bonusRegions:[‘cove’]}, score:3 },

// ── MONSTER-SPECIFIC ──────────────────────────────────
{ name:“Slayer of Beast”,    effect:”(vs Beast) +10 ACC, +3% CRIT - Weald/Warrens specialist”, keep:“Lock”, category:“monster”,
synergy:{bonusRegions:[‘weald’,‘warrens’]}, score:9 },
{ name:“Slayer of Eldritch”, effect:”(vs Eldritch) +10 ACC, +3% CRIT - Cove/Ruins specialist”, keep:“Lock”, category:“monster”,
synergy:{bonusRegions:[‘cove’,‘ruins’]}, score:9 },
{ name:“Slayer of Mankind”,  effect:”(vs Mankind) +10 ACC, +3% CRIT - Weald/Warrens vs Brigands”, keep:“Lock”, category:“monster”,
synergy:{bonusRegions:[‘weald’,‘warrens’]}, score:8 },
{ name:“Slayer of Unholy”,   effect:”(vs Unholy) +10 ACC, +3% CRIT - Ruins specialist”, keep:“Lock”, category:“monster”,
synergy:{bonusRegions:[‘ruins’]}, score:9 },
{ name:“Hatred of Beast”,    effect:”(vs Beast) +15% DMG, +15% Stress Resist - best Beast quirk”, keep:“Lock”, category:“monster”,
synergy:{bonusRegions:[‘weald’,‘warrens’]}, score:10 },
{ name:“Hatred of Eldritch”, effect:”(vs Eldritch) +15% DMG, +15% Stress Resist - best Eldritch quirk”, keep:“Lock”, category:“monster”,
synergy:{bonusRegions:[‘cove’,‘ruins’]}, score:10 },
{ name:“Hatred of Mankind”,  effect:”(vs Mankind) +15% DMG, +15% Stress Resist - Brigand/Weald killer”, keep:“Lock”, category:“monster”,
synergy:{bonusRegions:[‘weald’,‘warrens’]}, score:9 },
{ name:“Hatred of Unholy”,   effect:”(vs Unholy) +15% DMG, +15% Stress Resist - Ruins killer”, keep:“Lock”, category:“monster”,
synergy:{bonusRegions:[‘ruins’]}, score:10 },

// ── RESIST ────────────────────────────────────────────
{ name:“Steady”,           effect:”-10% Stress DMG received - always valuable”, keep:“Lock”, category:“resist”,
synergy:{}, score:8 },
{ name:“Resilient”,        effect:”+10% Stress Heal - speeds up recovery”, keep:“Lock”, category:“resist”,
synergy:{}, score:7 },
{ name:“Thick Blooded”,    effect:”+10% Blight Resist - useful vs Weald/Warrens”, keep:“Situational”, category:“resist”,
synergy:{bonusRegions:[‘weald’,‘warrens’]}, score:6 },
{ name:“Clotter”,          effect:”+15% Bleed Resist - lock for Weald runners”, keep:“Lock”, category:“resist”,
synergy:{bonusRegions:[‘weald’,‘warrens’]}, score:7 },
{ name:“Robust”,           effect:”+15% Disease Resist - lock for Warrens specialists”, keep:“Lock”, category:“resist”,
synergy:{bonusRegions:[‘warrens’]}, score:8 },
{ name:“Hard Noggin”,      effect:”+15% Stun Resist - prevents stun-lock”, keep:“Lock”, category:“resist”,
synergy:{}, score:8 },
{ name:“Irrepressible”,    effect:”+5% Affliction Resist - reduces virtue/affliction RNG”, keep:“Situational”, category:“resist”,
synergy:{}, score:5 },
{ name:“Unyielding”,       effect:”+10% Deathblow Resist - direct death prevention”, keep:“Lock”, category:“resist”,
synergy:{}, score:9 },
{ name:“Optimistic”,       effect:”+25% Debuff Resist - keeps hero stats intact”, keep:“Lock”, category:“resist”,
synergy:{}, score:8 },

// ── TOWN ─────────────────────────────────────────────
{ name:“Meditator”,        effect:”+20% Stress Heal when Meditating (Abbey) or camping”, keep:“Lock”, category:“town”,
synergy:{}, score:7 },
{ name:“Nymphomania”,      effect:”+20% Stress Heal at Brothel - pairs with Tavern”, keep:“Situational”, category:“town”,
synergy:{}, score:4 },
];
const NEG_QUIRKS = [
// ── GENERAL STAT ──────────────────────────────────────
{ name:“Fragile”,          effect:”-10% Max HP - dangerous on frontliners”, keep:“Purge”, category:“general”,
synergy:{}, score:-7 },
{ name:“Soft”,             effect:”-5% Max HP - minor but cumulative”, keep:“Purge”, category:“general”,
synergy:{}, score:-5 },
{ name:“Slow Reflexes”,    effect:”-1 SPD - acts later every round”, keep:“Purge”, category:“general”,
synergy:{}, score:-5 },
{ name:“The Yips”,         effect:”-5 ACC - misses compound over a dungeon”, keep:“Purge”, category:“general”,
synergy:{}, score:-6 },
{ name:“Clumsy”,           effect:”-5 DODGE - easier to hit”, keep:“Purge”, category:“general”,
synergy:{}, score:-5 },
{ name:“Inaccurate”,       effect:”-1% CRIT - minor penalty”, keep:“Situational”, category:“general”,
synergy:{}, score:-3 },
{ name:“The Runs”,         effect:”-10 DEF, -10% Max HP - double penalty”, keep:“Purge”, category:“general”,
synergy:{}, score:-8 },
{ name:“Tetanus”,          effect:”-5 ACC, -10% DMG - significant combat penalty”, keep:“Purge”, category:“general”,
synergy:{}, score:-8 },
{ name:“Syphilis”,         effect:”-5 ACC, -10 DMG, -10% Max HP - severe triple penalty”, keep:“Purge”, category:“general”,
synergy:{}, score:-10 },
{ name:“Rabies”,           effect:”-10 ACC, +20% DMG - risky trade-off”, keep:“Situational”, category:“general”,
synergy:{}, score:-3 },

// ── CONDITIONAL ──────────────────────────────────────
{ name:“Slow Draw”,        effect:”(Round 1) -4 SPD - acts last on opening round”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-5 },
{ name:“Off Guard”,        effect:”(Round 1) -4 SPD, -5 DODGE - vulnerable opener”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-6 },
{ name:“Weak Grip”,        effect:”(Melee) -3% CRIT - hurts melee damage dealers”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-5 },
{ name:“Torn Rotator Cuff”,effect:”(Melee) -5% DMG - persistent melee penalty”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-5 },
{ name:“Scattering”,       effect:”(Ranged) -5% DMG - hurts ranged heroes”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-5 },
{ name:“Lazy Eye”,         effect:”(Ranged) -5 ACC - ranged heroes miss more”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-6 },
{ name:“Flawed Release”,   effect:”(Ranged) -3% CRIT - minor ranged penalty”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-4 },
{ name:“Tuckered Out”,     effect:”(HP <50%) -10% DMG - gets weaker when wounded”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-6 },
{ name:“Winded”,           effect:”(HP <50%) -1 SPD - slows when hurt”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-4 },
{ name:“Dud Hitter”,       effect:”(HP <50%) -3% CRIT - loses punch when damaged”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-4 },
{ name:“Stomach Cramp”,    effect:”(Camping) -20% Heal received - undermines camping”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-7 },
{ name:“Bulimic”,          effect:”(Camping) -20% Heal received - same as Stomach Cramp”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-7 },
{ name:“Stress Eater”,     effect:”(Stress >50) +100% Food consumed - severe food drain”, keep:“Purge”, category:“conditional”,
synergy:{}, score:-6 },

// ── LIGHT-RELATED ────────────────────────────────────
{ name:“Sensitive to Light”,effect:”(Light >75) -10% DMG - punishes high torch play”, keep:“Purge”, category:“light”,
synergy:{penaltyRegions:[‘ruins’,‘weald’,‘warrens’,‘cove’]}, score:-6 },
{ name:“Night Blindness”,  effect:”(Light <25) -10% DMG - punishes dark runs”, keep:“Situational”, category:“light”,
synergy:{}, score:-4 },
{ name:“Diurnal”,          effect:”(Light <25) -2 SPD - slow in darkness”, keep:“Situational”, category:“light”,
synergy:{}, score:-4 },
{ name:“Nocturnal”,        effect:”(Light >75) -2 SPD - slow at high torch”, keep:“Situational”, category:“light”,
synergy:{}, score:-4 },
{ name:“Phengophobia”,     effect:”(Light >75) -20% Stress Resist - stressed by bright light”, keep:“Purge”, category:“light”,
synergy:{penaltyRegions:[‘ruins’,‘weald’,‘warrens’,‘cove’]}, score:-7 },
{ name:“Lygomania”,        effect:”(Light >75) +10% Stress DMG - stressed by bright light”, keep:“Purge”, category:“light”,
synergy:{penaltyRegions:[‘ruins’,‘weald’,‘warrens’,‘cove’]}, score:-7 },

// ── REGION-SPECIFIC ───────────────────────────────────
{ name:“Ruins Phobe”,      effect:”(Ruins) -20% Stress Resist - badly stressed in Ruins”, keep:“Purge”, category:“region”,
synergy:{penaltyRegions:[‘ruins’]}, score:-10 },
{ name:“Weald Phobe”,      effect:”(Weald) -20% Stress Resist - badly stressed in Weald”, keep:“Purge”, category:“region”,
synergy:{penaltyRegions:[‘weald’]}, score:-10 },
{ name:“Warrens Phobe”,    effect:”(Warrens) -20% Stress Resist - badly stressed in Warrens”, keep:“Purge”, category:“region”,
synergy:{penaltyRegions:[‘warrens’]}, score:-10 },
{ name:“Cove Phobe”,       effect:”(Cove) +20% Stress received - brutal in the Cove”, keep:“Purge”, category:“region”,
synergy:{penaltyRegions:[‘cove’]}, score:-10 },

// ── MONSTER-SPECIFIC ──────────────────────────────────
{ name:“Zoophobia”,        effect:”(vs Beast) -20% Stress Resist - Weald/Warrens crippler”, keep:“Purge”, category:“monster”,
synergy:{penaltyRegions:[‘weald’,‘warrens’]}, score:-9 },
{ name:“Automatonophobia”, effect:”(vs Mankind) -20% Stress Resist - Weald/Brigand problem”, keep:“Purge”, category:“monster”,
synergy:{penaltyRegions:[‘weald’,‘warrens’]}, score:-8 },
{ name:“Fear of Beast”,    effect:”(vs Beast) -15% Stress Resist, -10 ACC - double penalty”, keep:“Purge”, category:“monster”,
synergy:{penaltyRegions:[‘weald’,‘warrens’]}, score:-9 },
{ name:“Fear of Eldritch”, effect:”(vs Eldritch) -15% Stress Resist, -10 ACC - Cove/Ruins problem”, keep:“Purge”, category:“monster”,
synergy:{penaltyRegions:[‘cove’,‘ruins’]}, score:-9 },
{ name:“Fear of Mankind”,  effect:”(vs Mankind) -15% Stress Resist, -10 ACC”, keep:“Purge”, category:“monster”,
synergy:{penaltyRegions:[‘weald’,‘warrens’]}, score:-8 },
{ name:“Fear of Unholy”,   effect:”(vs Unholy) -15% Stress Resist, -10 ACC - Ruins problem”, keep:“Purge”, category:“monster”,
synergy:{penaltyRegions:[‘ruins’]}, score:-9 },
{ name:“Claustrophobia”,   effect:”(In corridor) -20% Stress Resist - hurts all regions”, keep:“Purge”, category:“monster”,
synergy:{penaltyRegions:[‘ruins’,‘weald’,‘warrens’,‘cove’]}, score:-8 },

// ── RESIST ────────────────────────────────────────────
{ name:“Nervous”,          effect:”+10% Stress DMG received - stacks badly”, keep:“Purge”, category:“resist”,
synergy:{}, score:-7 },
{ name:“Ruminator”,        effect:”-10% Stress Heal - slows recovery in town”, keep:“Purge”, category:“resist”,
synergy:{}, score:-6 },
{ name:“Thin Blooded”,     effect:”-10% Blight Resist - worse in Weald/Warrens”, keep:“Purge”, category:“resist”,
synergy:{penaltyRegions:[‘weald’,‘warrens’]}, score:-5 },
{ name:“Anemic”,           effect:”-10% Bleed Resist - worse in Weald”, keep:“Purge”, category:“resist”,
synergy:{penaltyRegions:[‘weald’]}, score:-5 },
{ name:“Hemophilia”,       effect:”-20% Bleed Resist - dangerous in Weald/Warrens”, keep:“Purge”, category:“resist”,
synergy:{penaltyRegions:[‘weald’,‘warrens’]}, score:-8 },
{ name:“Sickly”,           effect:”-10% Disease Resist - risky in Warrens”, keep:“Purge”, category:“resist”,
synergy:{penaltyRegions:[‘warrens’]}, score:-5 },
{ name:“Wasting Sickness”, effect:”-50% Disease Resist - never run in Warrens”, keep:“Purge”, category:“resist”,
synergy:{penaltyRegions:[‘warrens’]}, score:-10 },
{ name:“Shocker”,          effect:”-10% Stun Resist - gets stunned more often”, keep:“Purge”, category:“resist”,
synergy:{}, score:-5 },
{ name:“Mercurial”,        effect:”-5% Affliction Resist - more likely to afflict”, keep:“Purge”, category:“resist”,
synergy:{}, score:-5 },
{ name:“Suicidal”,         effect:”-10% Deathblow Resist - more likely to die at Death’s Door”, keep:“Purge”, category:“resist”,
synergy:{}, score:-9 },

// ── CURIO TRIGGERS ───────────────────────────────────
{ name:“Bloodthirsty”,     effect:“35% chance to auto-trigger Torture curios - wastes turns”, keep:“Purge”, category:“curio”,
synergy:{}, score:-6 },
{ name:“Kleptomaniac”,     effect:“35% chance to auto-trigger Treasure curios - keeps loot but risky”, keep:“Situational”, category:“curio”,
synergy:{}, score:-2 },
{ name:“Compulsive”,       effect:“20% chance to auto-trigger ANY curio - highly unpredictable”, keep:“Purge”, category:“curio”,
synergy:{penaltyRegions:[‘ruins’,‘weald’,‘warrens’,‘cove’]}, score:-8 },
{ name:“Guilty Conscience”,effect:“35% chance to auto-trigger Worship curios”, keep:“Situational”, category:“curio”,
synergy:{penaltyRegions:[‘ruins’]}, score:-4 },
{ name:“Dark Temptation”,  effect:“40% chance to auto-trigger Unholy curios”, keep:“Purge”, category:“curio”,
synergy:{penaltyRegions:[‘ruins’]}, score:-5 },
{ name:“Demonomania”,      effect:“40% chance to auto-trigger Unholy curios”, keep:“Purge”, category:“curio”,
synergy:{penaltyRegions:[‘ruins’]}, score:-5 },
{ name:“Egomania”,         effect:“40% chance to auto-trigger Reflective curios - keeps loot”, keep:“Situational”, category:“curio”,
synergy:{}, score:-2 },
{ name:“Necromania”,       effect:“40% chance to auto-trigger Body curios”, keep:“Purge”, category:“curio”,
synergy:{penaltyRegions:[‘ruins’,‘warrens’]}, score:-5 },

// ── TOWN ─────────────────────────────────────────────
{ name:“Faithless”,        effect:“Will not Pray or Flagellate - blocks Abbey”, keep:“Purge”, category:“town”,
synergy:{}, score:-7 },
{ name:“Deviant Tastes”,   effect:“Cannot visit Brothel - limits Tavern options”, keep:“Purge”, category:“town”,
synergy:{}, score:-5 },
{ name:“Known Cheat”,      effect:“Cannot Gamble - blocks Tavern option”, keep:“Purge”, category:“town”,
synergy:{}, score:-4 },
{ name:“Unquiet Mind”,     effect:“Cannot Meditate - blocks Abbey Cloister”, keep:“Purge”, category:“town”,
synergy:{}, score:-6 },
{ name:“Witness”,          effect:“Will not Pray - partial Abbey block”, keep:“Purge”, category:“town”,
synergy:{}, score:-5 },
{ name:“Tippler”,          effect:“Will only Drink - forces Tavern Bar exclusively”, keep:“Situational”, category:“town”,
synergy:{}, score:-3 },
{ name:“Resolution”,       effect:“Will never Drink - blocks Tavern Bar”, keep:“Situational”, category:“town”,
synergy:{}, score:-3 },
{ name:“Thanatophobia”,    effect:”+15 Stress when an ally dies - chain-reaction risk”, keep:“Purge”, category:“town”,
synergy:{}, score:-7 },

// ── AFFLICTIONS (reference only) ─────────────────────
{ name:“Abusive”,          effect:“All resists -15%, -5 ACC, -15 DEF; stresses party”, keep:“Purge”, category:“general”,
synergy:{}, score:-9 },
{ name:“Masochistic”,      effect:“All resists -15%, -15 DEF; may self-attack or death-mark self”, keep:“Purge”, category:“general”,
synergy:{}, score:-9 },
{ name:“Paranoid”,         effect:“All resists -15%; may ignore commands or act randomly”, keep:“Purge”, category:“general”,
synergy:{}, score:-8 },
{ name:“Hopeless”,         effect:“All resists -15%, -3 SPD; may ignore commands”, keep:“Purge”, category:“general”,
synergy:{}, score:-8 },
];
const BUILDINGS = [
// ── ABBEY (3 tracks × 6 pips each) ──────────────────
{
id: ‘abbey’, name: ‘Abbey’, icon: ‘⛪’,
upgrades: [
{ label: ‘Cloister’, maxLevel: 6,
effects: [‘Unlocks Prayer treatment’,‘Improved meditation quality’,‘Further improvement’,‘Veteran-tier recovery’,‘Reduced treatment cost’,‘Max quality - Cloister mastered’],
tags: [‘stress’,‘survival’], priority: 9 },
{ label: ‘Transept’, maxLevel: 6,
effects: [‘Unlocks Flagellation treatment’,‘Improved flagellation quality’,‘Further improvement’,‘Veteran-tier recovery’,‘Reduced treatment cost’,‘Max quality - Transept mastered’],
tags: [‘stress’,‘survival’], priority: 8 },
{ label: ‘Penance Hall’, maxLevel: 6,
effects: [‘Unlocks Penance treatment’,‘Improved absolution quality’,‘Further improvement’,‘Veteran-tier recovery’,‘Reduced treatment cost’,‘Max quality - Penance Hall mastered’],
tags: [‘stress’,‘survival’], priority: 7 }
]
},
// ── TAVERN (3 tracks × 6 pips each) ─────────────────
{
id: ‘tavern’, name: ‘Tavern’, icon: ‘🍺’,
upgrades: [
{ label: ‘Bar’, maxLevel: 6,
effects: [‘Unlocks Bar treatment’,‘Improved drinking quality’,‘Further improvement’,‘Veteran-tier stress relief’,‘Reduced treatment cost’,‘Max quality - Bar mastered’],
tags: [‘stress’,‘economy’], priority: 9 },
{ label: ‘Gambling Hall’, maxLevel: 6,
effects: [‘Unlocks Gambling treatment’,‘Improved gambling quality’,‘Further improvement’,‘Veteran-tier stress relief’,‘Reduced cost’,‘Max quality - Gambling mastered’],
tags: [‘stress’,‘economy’], priority: 7 },
{ label: ‘Brothel’, maxLevel: 6,
effects: [‘Unlocks Brothel treatment’,‘Improved quality’,‘Further improvement’,‘Veteran-tier stress relief’,‘Reduced cost’,‘Max quality - Brothel mastered’],
tags: [‘stress’], priority: 7 }
]
},
// ── SANITARIUM (5 / 5 / 4 pips) ─────────────────────
{
id: ‘sanitarium’, name: ‘Sanitarium’, icon: ‘🏥’,
upgrades: [
{ label: ‘Treatment Library’, maxLevel: 5,
effects: [‘Unlocks quirk treatment (1 slot)’,‘2nd quirk slot available’,‘Improved removal quality’,‘Reduced treatment cost’,‘Max library - guaranteed removal’],
tags: [‘quirks’,‘survival’], priority: 9 },
{ label: ‘Medical Devices’, maxLevel: 5,
effects: [‘Unlocks disease treatment (1 slot)’,‘2nd disease slot available’,‘Improved cure quality’,‘Reduced disease cost’,‘Max devices - full disease mastery’],
tags: [‘quirks’,‘survival’], priority: 8 },
{ label: ‘Patient Cells’, maxLevel: 4,
effects: [‘Unlocks 3rd treatment slot’,‘4th treatment slot’,‘Reduced overall cost’,‘Max capacity - 4 simultaneous patients’],
tags: [‘quirks’,‘survival’], priority: 7 }
]
},
// ── BLACKSMITH (3 tracks × 4 pips each) ─────────────
{
id: ‘blacksmith’, name: ‘Blacksmith’, icon: ‘⚒️’,
upgrades: [
{ label: ‘Weaponsmithing’, maxLevel: 4,
effects: [‘Apprentice weapons available’,‘Veteran weapons available’,‘Champion weapons available’,‘Max - all tiers at reduced cost’],
tags: [‘speed’,‘darkest’], priority: 10 },
{ label: ‘Armorsmithing’, maxLevel: 4,
effects: [‘Apprentice armor available’,‘Veteran armor available’,‘Champion armor available’,‘Max - all tiers at reduced cost’],
tags: [‘survival’,‘darkest’], priority: 10 },
{ label: ‘Furnace’, maxLevel: 4,
effects: [‘Apprentice upgrade discount’,‘Veteran upgrade discount’,‘Champion upgrade discount’,‘Max - maximum cost reduction’],
tags: [‘economy’,‘darkest’], priority: 8 }
]
},
// ── GUILD (4 pips / 5 pips) ──────────────────────────
{
id: ‘guild’, name: ‘Guild’, icon: ‘⚔️’,
upgrades: [
{ label: ‘Instructor Mastery’, maxLevel: 4,
effects: [‘Apprentice skills available’,‘Veteran skills available’,‘Champion skills available’,‘Max - all skill tiers unlocked’],
tags: [‘speed’,‘darkest’], priority: 10 },
{ label: ‘Training Regimen’, maxLevel: 5,
effects: [‘1 skill upgrade slot’,‘2 skill upgrade slots’,‘3 skill upgrade slots’,‘4 skill upgrade slots’,‘Max - 5 slots, reduced costs’],
tags: [‘speed’,‘darkest’], priority: 8 }
]
},
// ── STAGECOACH (5 / 5 / 4 pips) ─────────────────────
{
id: ‘stagecoach’, name: ‘Stage Coach’, icon: ‘🚌’,
upgrades: [
{ label: ‘Stagecoach Network’, maxLevel: 5,
effects: [‘Base hero recruitment (2/week)’,‘3 heroes available per week’,‘4 heroes available per week’,‘Improved class variety’,‘Max - 5 heroes/week, rare class boost’],
tags: [‘survival’,‘speed’], priority: 9 },
{ label: ‘Hero Barracks’, maxLevel: 5,
effects: [‘Roster size +2 (11 total)’,‘Roster size +2 (13 total)’,‘Roster size +2 (15 total)’,‘Roster size +2 (17 total)’,‘Max - full 19-hero roster’],
tags: [‘survival’], priority: 9 },
{ label: ‘Experienced Recruits’, maxLevel: 4,
effects: [‘Recruits arrive at Lvl 1’,‘Recruits arrive at Lvl 2’,‘Recruits arrive at Lvl 3’,‘Max - recruits arrive seasoned with bonuses’],
tags: [‘speed’,‘darkest’], priority: 7 }
]
},
// ── SURVIVALIST (1 track × 5 pips) ───────────────────
{
id: ‘survivalist’, name: ‘Survivalist’, icon: ‘🏕️’,
upgrades: [
{ label: ‘Bonfire’, maxLevel: 5,
effects: [‘Unlocks basic camping skills’,‘Additional camping skills available’,‘Further camping skill unlocks’,‘Veteran-tier camping skills’,‘Max - all camping skills + reduced costs’],
tags: [‘survival’,‘speed’], priority: 9 }
]
},
// ── NOMAD WAGON (4 / 5 pips) ─────────────────────────
{
id: ‘nomadwagon’, name: ‘Nomad Wagon’, icon: ‘🛒’,
upgrades: [
{ label: ‘Wagon Size’, maxLevel: 4,
effects: [‘Trinket stock +1 (wider selection)’,‘Trinket stock +2’,‘Trinket stock +3’,‘Max - full trinket catalogue available’],
tags: [‘economy’,‘speed’], priority: 7 },
{ label: ‘Merchant Network’, maxLevel: 5,
effects: [‘Trinket cost reduction tier 1’,‘Trinket cost reduction tier 2’,‘Trinket cost reduction tier 3’,‘Rare trinket appearance chance up’,‘Max - max discount + rare trinket guarantee’],
tags: [‘economy’], priority: 8 }
]
}
];