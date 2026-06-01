export const DefaultText: { [id: IDEntry]: DefaultText } = {
	default: {
		startBattle: "Battle started between [TRAINER] and [TRAINER]!",
		winBattle: "**[TRAINER]** won the battle!",
		tieBattle: "A tie has been declared between [TRAINER] and [TRAINER]!",

		pokemon: "[NICKNAME]",
		opposingPokemon: "the opposing [NICKNAME]",
		team: "your team",
		opposingTeam: "the opposing team",
		party: "your ally Pok\u00E9mon",
		opposingParty: "the opposing Pok\u00E9mon",

		turn: "== Turn [NUMBER] ==",
		switchIn: "[TRAINER] sent out [FULLNAME]!",
		switchInOwn: "Go! [FULLNAME]!",
		switchOut: "[TRAINER] withdrew [NICKNAME]!",
		switchOutOwn: "[NICKNAME], come back!",
		drag: "[FULLNAME] was dragged out!",
		faint: "[POKEMON] fainted!",
		swap: "[POKEMON] and [TARGET] switched places!",
		swapCenter: "[POKEMON] moved to the center!",

		// Multi Battles only
		canDynamax: "  [TRAINER] can dynamax now!",
		canDynamaxOwn: "  Dynamax Energy gathered around [TRAINER]!",

		zEffect: "  [POKEMON] unleashes its full-force Z-Move!",
		move: "[POKEMON] used **[MOVE]**!",
		abilityActivation: "[[POKEMON]'s [ABILITY]]",

		mega: "  [POKEMON]'s [ITEM] is reacting to the Key Stone!",
		megaNoItem: "  [POKEMON] is reacting to [TRAINER]'s Key Stone!",
		megaGen6: "  [POKEMON]'s [ITEM] is reacting to [TRAINER]'s Mega Bracelet!",
		transformMega: "[POKEMON] has Mega Evolved into Mega [SPECIES]!",
		primal: "[POKEMON]'s Primal Reversion! It reverted to its primal state!",
		zPower: "  [POKEMON] surrounded itself with its Z-Power!",
		zBroken: "  [POKEMON] couldn't fully protect itself and got hurt!",
		terastallize: "  [POKEMON] has Terastallized into the [TYPE]-type!", // filler

		// in case the different default messages didn't make it obvious, the difference
		// is that the `cant` message REPLACES "Pokemon used Move!", while the `fail`
		// message happens AFTER "Pokemon used Move!"
		cant: "[POKEMON] cannott use [MOVE]!",
		cantNoMove: "[POKEMON] is kinda disabled...",
		fail: "[POKEMON]'s move failed.",

		// n.b. this is the default message for in-battle forme changes
		// for the move Transform and ability Imposter, see the entry for the move Transform
		transform: "[POKEMON] transformed!",
		typeChange: "  [POKEMON]'s type changed to [TYPE]!",
		typeChangeFromEffect: "  [POKEMON]'s [EFFECT] made it the [TYPE] type!",
		typeAdd: "  [TYPE] type was given to [POKEMON]!",

		start: "  ([EFFECT] started on [POKEMON]!)",
		end: "  [POKEMON] was freed from [EFFECT]!",
		activate: "  ([EFFECT] activated!)",
		startTeamEffect: "  ([EFFECT] started on [TEAM]!)",
		endTeamEffect: "  ([EFFECT] ended on [TEAM]!)",
		startFieldEffect: "  ([EFFECT] started!)",
		endFieldEffect: "  ([EFFECT] ended!)",

		changeAbility: "  [POKEMON] acquired [ABILITY]!",
		addItem: "  [POKEMON] obtained one [ITEM].", // Trick, Switcheroo
		takeItem: "  [POKEMON] stole [SOURCE]'s [ITEM]!", // Thief, Covet, Magician, Pickpocket
		eatItem: "  ([POKEMON] ate its [ITEM]!)",
		useGem: "  The [ITEM] strengthened [POKEMON]'s power!",
		eatItemWeaken: "  The [ITEM] weakened damage to [POKEMON]!",
		removeItem: "  [POKEMON] lost its [ITEM]!",
		activateItem: "  ([POKEMON] used its [ITEM]!)",
		activateWeaken: "  The [ITEM] weakened the damage to [POKEMON]!",

		damage: "  ([POKEMON] was hurt!)",
		damagePercentage: "  ([POKEMON] lost [PERCENTAGE] of its health!)",
		damageFromPokemon: "  [POKEMON] was hurt by [SOURCE]'s [ITEM]!", // Jaboca/Rowap Berry
		damageFromItem: "  [POKEMON] was hurt by its [ITEM]!", // Sticky Barb
		damageFromPartialTrapping: "  [POKEMON] is hurt by [MOVE]!",
		heal: "  [POKEMON] had its HP restored.",
		healFromZEffect: "  [POKEMON] restored its HP using its Z-Power!",
		healFromEffect: "  [POKEMON] restored HP using its [EFFECT]!",

		boost: "  [POKEMON]'s [STAT] rose by 1 stage!",
		boost2: "  [POKEMON]'s [STAT] rose heavily!",
		boost3: "  [POKEMON]'s [STAT] rose intensely!",
		boost4: "  [POKEMON]'s [STAT] rose drastically!",
		boost5: "  [POKEMON]'s [STAT] rose astronomically!",
		boost6: "  [POKEMON]'s [STAT] was maxed out in one move!",
		boost0: "  [POKEMON]'s [STAT] is unable to go any higher!",
		boostFromItem: "  The [ITEM] increased [POKEMON]'s [STAT] by 1!",
		boost2FromItem: "  The [ITEM] heavily raised [POKEMON]'s [STAT]!",
		boost3FromItem: "  The [ITEM] intensely raised [POKEMON]'s [STAT]!",
		boost4FromItem: "  The [ITEM] drastically raised [POKEMON]'s [STAT]!",
		boost5FromItem: "  The [ITEM] astronomically raised [POKEMON]'s [STAT]!",
		boost6FromItem: "  The [ITEM] maxed out [POKEMON]'s [STAT] at once!",
		boostFromZEffect: "  [POKEMON] boosted its [STAT] by 1 stage using its Z-Power!",
		boost2FromZEffect: "  [POKEMON] boosted its [STAT] heavily using its Z-Power!",
		boost3FromZEffect: "  [POKEMON] boosted its [STAT] intensely using its Z-Power!",
		boost4FromZEffect: "  [POKEMON] boosted its [STAT] drastically using its Z-Power!",
		boost5FromZEffect: "  [POKEMON] boosted its [STAT] astronomically using its Z-Power!",
		boost6FromZEffect: "  [POKEMON] maxed out its [STAT] all the way using its Z-Power!",
		boostMultipleFromZEffect: "  [POKEMON] boosted multiple stats using its Z-Power!",

		unboost: "  [POKEMON]'s [STAT] fell!",
		unboost2: "  [POKEMON]'s [STAT] was nerfed harshly!",
		unboost3: "  [POKEMON]'s [STAT] was nerfed severely!",
		unboost4: "  [POKEMON]'s [STAT] was nerfed intensely!",
		unboost5: "  [POKEMON]'s [STAT] was nerfed drastically!",
		unboost6: "  [POKEMON]'s [STAT] stat was nearly erased...",
		unboost0: "  [POKEMON]'s [STAT] won't go any lower..!",
		unboostFromItem: "  The [ITEM] nerfed [POKEMON]'s [STAT]!",
		unboost2FromItem: "  The [ITEM] harshly nerfed [POKEMON]'s [STAT]!",
		unboost3FromItem: "  The [ITEM] severely nerfed [POKEMON]'s [STAT]!",
		unboost4FromItem: "  The [ITEM] intensely nerfed [POKEMON]'s [STAT]!",
		unboost5FromItem: "  The [ITEM] drastically nerfed [POKEMON]'s [STAT]!",
		unboost6FromItem: "  The [ITEM] nearly erased [POKEMON]'s [STAT]...",

		swapBoost: "  [POKEMON] switched stat changes with its target!",
		swapOffensiveBoost: "  [POKEMON] switched all changes to its Attack and Sp. Atk with its target!",
		swapDefensiveBoost: "  [POKEMON] switched all changes to its Defense and Sp. Def with its target!",
		copyBoost: "  [POKEMON] copied [TARGET]'s stat changes!",
		clearBoost: "  [POKEMON]'s stat changes were removed completely!",
		clearBoostFromZEffect: "  [POKEMON] returned its decreased stats to normal using its Z-Power!",
		invertBoost: "  [POKEMON]'s stat changes were inverted!",
		clearAllBoost: "  The stat changes of all active Pokemon were removed!",

		superEffective: "  It's super effective!",
		superEffectiveSpread: "  It's super effective on [POKEMON]!",
		resisted: "  It's not very effective...",
		resistedSpread: "  It's not very effective on [POKEMON].",
		extremelyEffective: "  The move pierced the target's very soul!",
		extremelyEffectiveSpread: "  The move pierced the opposing [POKEMON]'s very soul!",
		mostlyIneffective: "  The move did almost nothing...",
		mostlyIneffectiveSpread: "  It's mostly ineffective on [POKEMON].",
		crit: "  THE MOVE CRITICALLY STRUCK!",
		critSpread: "  [POKEMON] WAS CRITICALLY STRUCK",
		immune: "  [POKEMON] took no damage?!?!",
		immuneNoPokemon: "  It did nothing?!?!", // old gens
		immuneOHKO: "  [POKEMON] managed to dodge the move just in time!",
		miss: "  [POKEMON] avoided the attack!",
		missNoPokemon: "  [SOURCE]'s attack missed!", // old gens

		center: "  Automatic center!",
		noTarget: "  There is nothing to hit...", // gen 5 and earlier
		ohko: "  The move induced a fatal wound...",
		combine: "  The two moves have become one! It's a combined move!",
		hitCount: "  The Pok\u00E9mon was bashed [NUMBER] times!",
		hitCountSingular: "  The Pok\u00E9mon was attacked only once!",
	},

	// stats
	hp: {
		statName: "HP",
		statShortName: "HP",
	},
	atk: {
		statName: "Attack",
		statShortName: "Atk",
	},
	def: {
		statName: "Defense",
		statShortName: "Def",
	},
	spa: {
		statName: "Sp. Atk",
		statShortName: "SpA",
	},
	spd: {
		statName: "Sp. Def",
		statShortName: "SpD",
	},
	spe: {
		statName: "Speed",
		statShortName: "Spe",
	},
	accuracy: {
		statName: "accuracy",
	},
	evasion: {
		statName: "evasiveness",
	},
	spc: {
		statName: "Special",
		statShortName: "Spc",
	},
	stats: {
		statName: "stats",
	},

	// statuses
	brn: {
		start: "  [POKEMON] was burned!",
		startFromItem: "  [POKEMON] was burned by the [ITEM]!",
		alreadyStarted: "  [POKEMON] is already burned!",
		end: "  [POKEMON]'s burn was healed!",
		endFromItem: "  [POKEMON]'s [ITEM] healed its burn!",
		damage: "  [POKEMON] was hurt by its burn!",
	},
	sco: {
		start: "  [POKEMON] was badly burnt!",
		startFromItem: "  [POKEMON] was scorched severely by the [ITEM]!",
		alreadyStarted: "  [POKEMON] is already badly burnt!",
		end: "  [POKEMON]'s bad burn was healed!",
		endFromItem: "  [POKEMON]'s [ITEM] healed its bad burn!",
		damage: "  [POKEMON] was hurt by its burn!",
	},
	frz: {
		start: "  [POKEMON] was frozen solid!",
		alreadyStarted: "  [POKEMON] is already frozen solid!",
		end: "  [POKEMON] thawed out!",
		endFromItem: "  [POKEMON]'s [ITEM] defrosted it!",
		endFromMove: "  [POKEMON]'s [MOVE] melted the ice!",
		cant: "[POKEMON] is frozen solid! It can't move!",
	},
	par: {
		start: "  [POKEMON] is paralyzed! It may be unable to move!",
		alreadyStarted: "  [POKEMON] is already paralyzed!",
		end: "  [POKEMON] was cured of paralysis!",
		endFromItem: "  [POKEMON]'s [ITEM] cured its paralysis!",
		cant: "[POKEMON] is paralyzed! It can't move!",
	},
	psn: {
		start: "  [POKEMON] was poisoned!",
		alreadyStarted: "  [POKEMON] is already poisoned!",
		end: "  [POKEMON] was cured of its poisoning!",
		endFromItem: "  [POKEMON]'s [ITEM] cured its poison!",
		damage: "  [POKEMON] was hurt by poison!",
	},
	tox: {
		start: "  [POKEMON] was fatally poisoned!",
		startFromItem: "  [POKEMON] was fatally poisoned by the [ITEM]!",
		end: "  [POKEMON]'s fatal poison was miraculously cured!",
		endFromItem: "  [POKEMON]'s item miraculously cured it of it's fatal poison!",
		alreadyStarted: "#psn",
		damage: "  [POKEMON]'s condition is worsening by the second!",
	},
	slp: {
		start: "  [POKEMON] fell asleep!",
		startFromRest: "  [POKEMON] fell asleep, healing it's injuries!",
		alreadyStarted: "  [POKEMON] is currently asleep",
		end: "  [POKEMON] woke up!",
		endFromItem: "  [POKEMON]'s [ITEM] woke it up!",
		cant: "[POKEMON] is fast asleep.",
	},

	// misc effects
	confusion: {
		start: "  [POKEMON] became confused!",
		startFromFatigue: "  [POKEMON] became confused due to fatigue!",
		end: "  [POKEMON] snapped out of its confusion!",
		endFromItem: "  [POKEMON]'s [ITEM] snapped it out of its confusion!",
		alreadyStarted: "  [POKEMON] is already confused!",
		activate: "  [POKEMON] is confused!",
		damage: "It hurt itself in its confusion!",
	},
	suicidal: {
		start: "  [POKEMON] *^^@*^*&#^@#*^#",
		startFromFatigue: "  [POKEMON] *^^@*^*&#^@#*^# due to fatigue!",
		end: "  [POKEMON] regained it's will to live!",
		endFromItem: "  [POKEMON]'s [ITEM] cured the effects of &^&^*&^*&^*^&#@*^!",
		alreadyStarted: "  [POKEMON] is already ^&*^&*^&^&*^&^*@^&*&^*&^*&^^%^%$^!",
		activate: "  [POKEMON] lost it's will to live...",
		damage: "IT^^KILLED@&ITSELF?@????!?!&!%@$^%&%%&%&^%&^%&^%^&%^&%#@^*#^@&*^@&*#^*&@&^#&*@^*#&@^&*^@*&^#*@&^#&@#",
	},
	drain: {
		heal: "  [SOURCE] had its energy drained!",
	},
	flinch: {
		cant: "[POKEMON] flinched and couldn't move!",
	},
	heal: {
		fail: "  [POKEMON]'s HP is already full!",
	},
	healreplacement: {
		activate: "  [POKEMON] will restore its replacement's HP using its Z-Power!",
	},
	nopp: {
		cant: "[POKEMON] used [MOVE]!\n  But there was no PP left for the move!",
	},
	recharge: {
		cant: "[POKEMON] must recover from their intensely powerful move!",
	},
	recoil: {
		damage: "  [POKEMON] hurt itself from the!",
	},
	unboost: {
		fail: "  [POKEMON]'s stats were not lowered!",
		failSingular: "  [POKEMON]'s [STAT] was not lowered!",
	},
	struggle: {
		activate: "  [POKEMON] cannot use any more moves!",
	},
	trapped: {
		start: "  [POKEMON] was chained to the battlefield!",
	},
	dynamax: {
		start: "  ([POKEMON]'s Dynamax!)",
		end: "  ([POKEMON] returned to normal!)",
		block: "  The move was blocked by the power of Dynamax!",
		fail: "  [POKEMON] shook its head. It seems like it can't use this move...",
	},

	// weather
	sandstorm: {
		weatherName: "Sandstorm",
		start: "  A sandstorm kicked up!",
		end: "  The sandstorm subsided.",
		upkeep: "  (The sandstorm is raging.)",
		damage: "  [POKEMON] is buffeted by the sandstorm!",
	},
	sunnyday: {
		weatherName: "Sun",
		start: "  The sunlight turned harsh!",
		end: "  The harsh sunlight faded.",
		upkeep: "  (The sunlight is strong.)",
	},
	raindance: {
		weatherName: "Rain",
		start: "  It started to rain!",
		end: "  The rain stopped.",
		upkeep: "  (Rain continues to fall.)",
	},
	hail: {
		weatherName: "Hail",
		start: "  It started to hail!",
		end: "  The hail stopped.",
		upkeep: "  (The hail is crashing down.)",
		damage: "  [POKEMON] is buffeted by the hail!",
	},
	snowscape: {
		weatherName: "Snow",
		start: "  It started to snow!",
		end: "  The snow stopped.",
		upkeep: "  (The snow is falling down.)",
	},
	malevolentshrine: {
		weatherName: "Domain Expansion: Malevolent Shrine",
		start: "  Malevolent Shrine has taken effect! Slashes are cutting deep into active Poku\u00E9mon!",
		end: "  The hail stopped.",
		upkeep: "  (The Slashes are still cutting deep)",
		damage: "  [POKEMON] has been heavily wounded by countless slashes!",
	},
	desolateland: {
		weatherName: "Intense Sun",
		start: "  The sunlight turned extremely harsh!",
		end: "  The extremely harsh sunlight faded.",
		block: "  The extremely harsh sunlight was not lessened at all!",
		blockMove: "  The Water-type attack evaporated in the harsh sunlight!",
	},
	primordialsea: {
		weatherName: "Heavy Rain",
		start: "  A heavy rain began to fall!",
		end: "  The heavy rain has lifted!",
		block: "  There is no relief from this heavy rain!",
		blockMove: "  The Fire-type attack fizzled out in the heavy rain!",
	},
	deltastream: {
		weatherName: "Strong Winds",
		start: "  Mysterious strong winds are protecting Flying-type Pok\u00E9mon!",
		end: "  The mysterious strong winds have dissipated!",
		activate: "  The mysterious strong winds weakened the attack!",
		block: "  The mysterious strong winds blow on regardless!",
	},
	void: {
		weatherName: "Summoned Void",
		start: "  A pure black (*&@#(*&#(@&missing_void####*&# has been summoned?!",
		end: "  The ^^*&(&@@)missing_void)@)#(#&*@(& disappeared?!",
		block: "  block_alert?!?!",
		blockMove: "  blockMove_alert?!?!",
	},

	// terrain
	electricterrain: {
		start: "  An electric current ran across the battlefield!",
		end: "  The electricity disappeared from the battlefield.",
		block: "  [POKEMON] is protected by the Electric Terrain!",
	},
	grassyterrain: {
		start: "  Grass grew to cover the battlefield!",
		end: "  The grass disappeared from the battlefield.",
		heal: "  [POKEMON]'s HP was restored.",
	},
	mistyterrain: {
		start: "  Mist swirled around the battlefield!",
		end: "  The mist disappeared from the battlefield.",
		block: "  [POKEMON] surrounds itself with a protective mist!",
	},
	psychicterrain: {
		start: "  The battlefield got weird!",
		end: "  The weirdness disappeared from the battlefield!",
		block: "  [POKEMON] is protected by the Psychic Terrain!",
	},

	// field effects
	gravity: {
		start: "  The force of gravity has intensified!",
		end: "  Gravity returned to normal!",
		cant: "[POKEMON] is anchored to the ground by the intense gravitational pull, making it unable to use [MOVE]...",
		activate: "[POKEMON] plummeted to the ground because of the gravity's increase!",
	},
	magicroom: {
		start: "  All Pok\u00E9mon have become too confused to use their held items!",
		end: "  Magic Room wore off, and held items' effects returned to normal!",
	},
	mudsport: {
		start: "  Electricity's power is fizzling out!",
		end: "  The effects of Mud Sport have faded.",
	},
	trickroom: {
		start: "  [POKEMON] distorted reality!",
		end: "  The dimensions untwisted!",
	},
	watersport: {
		start: "  Fire attacks are being extingueshed!",
		end: "  The effects of Water Sport have faded.",
	},
	wonderroom: {
		start: "  ???",
		end: "  Wonder Room's effect has ended",
	},

	// misc
	crash: {
		damage: "  [POKEMON] was reckless and collided, taking the move's recoil!",
	},
};
