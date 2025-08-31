export interface ISpellType{
    coldSnap: string,
    ghostWalk: string,
    iceWall: string,
    emp: string,
    tornado: string,
    alacrity: string,
    sunStrike: string,
    forgeSpirit: string,
    chaosMeteor: string,
    deafeningBlast: string,
    noSpell: string
}

export type SPELL =
    'coldSnap'|
    'ghostWalk'|
    'iceWall'|
    'emp'|
    'tornado'|
    'alacrity'|
    'sunStrike'|
    'forgeSpirit'|
    'chaosMeteor'|
    'deafeningBlast'|
    'noSpell'
;

// export type SPELLS = typeof SPELLS[keyof typeof SPELLS];/