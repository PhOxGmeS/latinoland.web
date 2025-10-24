import type { ImagePlaceholder } from './placeholder-images';
import { PlaceHolderImages } from './placeholder-images';

export interface Item {
  id: string;
  name: string;
  image: ImagePlaceholder;
  command: string;
  price?: number;
  type: 'item' | 'dino';
  description: string;
  level?: string | number;
}

const getImage = (id: string): ImagePlaceholder => {
    const img = PlaceHolderImages.find(p => p.id === id);
    if (!img) {
        return {
            id: 'fallback',
            description: 'A fallback image',
            imageUrl: `https://picsum.photos/seed/${id}/400/300`,
            imageHint: 'placeholder'
        }
    }
    return img;
}

export const items: Item[] = [
  // SellItems
  { id: '5', name: 'allo', type: 'item', description: 'Cerebro de Allosaurus', price: 50, command: '/sell allo', image: getImage('5') },
  { id: '20', name: 'ApexDrop_AlphaCarno', type: 'item', description: 'Brazo Alfa Carnotaurus', price: 300, command: '/sell ApexDrop_AlphaCarno', image: getImage('20') },
  { id: '28', name: 'ApexDrop_CrabClaw', type: 'item', description: 'Garra Alfa Karkinos', price: 300, command: '/sell ApexDrop_CrabClaw', image: getImage('28') },
  { id: '29', name: 'ApexDrop_FireWyvern', type: 'item', description: 'Wyvern Talon fuego', price: 50, command: '/sell ApexDrop_FireWyvern', image: getImage('29') },
  { id: '36', name: 'ApexDrop_GasBag', type: 'item', description: 'Vejiga Gasbags', price: 50, command: '/sell ApexDrop_GasBag', image: getImage('36') },
  { id: '21', name: 'ApexDrop_AlphaLeeds', type: 'item', description: 'Grasa Alfa Leedsichthys', price: 500, command: '/sell ApexDrop_AlphaLeeds', image: getImage('21') },
  { id: '30', name: 'ApexDrop_LightningWyvern', type: 'item', description: 'Wyvern Talon rayo', price: 50, command: '/sell ApexDrop_LightningWyvern', image: getImage('30') },
  { id: '9', name: 'ApexDrop_Megalania', type: 'item', description: 'Megalania Toxina', price: 50, command: '/sell ApexDrop_Megalania', image: getImage('9') },
  { id: '22', name: 'ApexDrop_AlphaMegalodon', type: 'item', description: 'Aleta Alfa Megalodon', price: 500, command: '/sell ApexDrop_AlphaMegalodon', image: getImage('22') },
  { id: '23', name: 'ApexDrop_AlphaMosasaur', type: 'item', description: 'Diente Alfa Mosasaur', price: 500, command: '/sell ApexDrop_AlphaMosasaur', image: getImage('23') },
  { id: '31', name: 'ApexDrop_PoisonWyvern', type: 'item', description: 'Wyvern Talon veneno', price: 50, command: '/sell ApexDrop_PoisonWyvern', image: getImage('31') },
  { id: '24', name: 'ApexDrop_AlphaRaptor', type: 'item', description: 'Garra Alfa Raptor', price: 200, command: '/sell ApexDrop_AlphaRaptor', image: getImage('24') },
  { id: '26', name: 'ApexDrop_AlphaRex', type: 'item', description: 'Diente Alfa Tyrannosaur', price: 300, command: '/sell ApexDrop_AlphaRex', image: getImage('26') },
  { id: '34', name: 'ApexDrop_RockDrake', type: 'item', description: 'Pluma Rock Drake', price: 50, command: '/sell ApexDrop_RockDrake', image: getImage('34') },
  { id: '12', name: 'ApexDrop_Sauro', type: 'item', description: 'Sauropodo Vertebra', price: 50, command: '/sell ApexDrop_Sauro', image: getImage('12') },
  { id: '15', name: 'ApexDrop_Thylaco', type: 'item', description: 'Uña Thylacoleo', price: 50, command: '/sell ApexDrop_Thylaco', image: getImage('15') },
  { id: '17', name: 'ApexDrop_Tuso', type: 'item', description: 'Tentaculo Tusoteuthis', price: 300, command: '/sell ApexDrop_Tuso', image: getImage('17') },
  { id: '25', name: 'ApexDrop_AlphaTuso', type: 'item', description: 'Ojo Alfa Tusoteuthis', price: 500, command: '/sell ApexDrop_AlphaTuso', image: getImage('25') },
  { id: '27', name: 'ApexDrop_Basilisk_Alpha', type: 'item', description: 'Colmillo Alfa Basilisco', price: 400, command: '/sell ApexDrop_Basilisk_Alpha', image: getImage('27') },
  { id: '16', name: 'ApexDrop_Boa', type: 'item', description: 'Veneno Titanoboa', price: 50, command: '/sell ApexDrop_Boa', image: getImage('16') },
  { id: '43', name: 'Aqualyrium', type: 'item', description: 'Aqualyrium', level: '-', price: 9999, command: '/buy Aqualyrium', image: getImage('43') },
  { id: '2', name: 'arana', type: 'item', description: 'Trofeo araña en gamma', price: 3000, command: '/sell arana', image: getImage('2') },
  { id: '6', name: 'argy', type: 'item', description: 'Argentavis Talon', price: 50, command: '/sell argy', image: getImage('6') },
  { id: '44', name: 'Barnacle', type: 'item', description: 'Barnacle', level: '-', price: 9999, command: '/buy Barnacle', image: getImage('44') },
  { id: '7', name: 'basil', type: 'item', description: 'Grasa Basilosaurus', price: 150, command: '/sell basil', image: getImage('7') },
  { id: '37', name: 'Beyla_Relic', type: 'item', description: 'Beyla Relic', price: 500, command: '/sell Beyla_Relic', image: getImage('37') },
  { id: '3', name: 'dragon', type: 'item', description: 'Trofeo dragon en gamma', price: 4000, command: '/sell dragon', image: getImage('3') },
  { id: '46', name: 'Fish', type: 'item', description: 'Fish Scale', level: '-', price: 9999, command: '/buy Fish', image: getImage('46') },
  { id: '8', name: 'giga', type: 'item', description: 'Corazon Giganotosaurus', price: 300, command: '/sell giga', image: getImage('8') },
  { id: '47', name: 'HardenedSteelIngot', type: 'item', description: 'Hardened Steel Ingot', level: '-', price: 9999, command: '/buy HardenedSteelIngot', image: getImage('47') },
  { id: '38', name: 'Hati_Relic', type: 'item', description: 'Hati Relic', price: 500, command: '/sell Hati_Relic', image: getImage('38') },
  { id: '32', name: 'lisko', type: 'item', description: 'Escama Basilisco', price: 50, command: '/sell lisko', image: getImage('32') },
  { id: '49', name: 'Manganese', type: 'item', description: 'Manganese', level: '-', price: 5000, command: '/buy Manganese', image: getImage('49') },
  { id: '10', name: 'megal', type: 'item', description: 'Diente Megalodon', price: 50, command: '/sell megal', image: getImage('10') },
  { id: '4', name: 'mono', type: 'item', description: 'Trofeo mono en gamma', price: 3000, command: '/sell mono', image: getImage('4') },
  { id: '1', name: 'rex', type: 'item', description: 'Trofeo cabeza de rex', price: 50, command: '/sell rex', image: getImage('1') },
  { id: '35', name: 'Runestone', type: 'item', description: 'Piedra runica', price: 50, command: '/sell Runestone', image: getImage('35') },
  { id: '41', name: 'Runestone', type: 'item', description: 'Piedra runica', level: '-', price: 200, command: '/buy Runestone', image: getImage('41') },
  { id: '13', name: 'sarco', type: 'item', description: 'Piel Sarcosuchus', price: 50, command: '/sell sarco', image: getImage('13') },
  { id: '48', name: 'Seaweed', type: 'item', description: 'Seaweed', level: '-', price: 5000, command: '/buy Seaweed', image: getImage('48') },
  { id: '39', name: 'Skoll_Relic', type: 'item', description: 'Skoll Relic', price: 500, command: '/sell Skoll_Relic', image: getImage('39') },
  { id: '11', name: 'spino', type: 'item', description: 'Cresta Spinosaurus', price: 50, command: '/sell spino', image: getImage('11') },
  { id: '40', name: 'Steinbjorn_Relic', type: 'item', description: 'Steinbjorn Relic', price: 500, command: '/sell Steinbjorn_Relic', image: getImage('40') },
  { id: '14', name: 'theri', type: 'item', description: 'Garras Therizino', price: 50, command: '/sell theri', image: getImage('14') },
  { id: '42', name: 'tools', type: 'item', description: 'Pico y hacha metal', level: '-', price: 500, command: '/buy tools', image: getImage('42') },
  { id: '18', name: 'tyrano', type: 'item', description: 'Pata Tyrannosaurus', price: 50, command: '/sell tyrano', image: getImage('18') },
  { id: '45', name: 'Wood', type: 'item', description: 'Crystallized Wood', level: '-', price: 9999, command: '/buy Wood', image: getImage('45') },
  { id: '33', name: 'XenomorphPheromoneGland', type: 'item', description: 'Reaper Feromona', price: 50, command: '/sell XenomorphPheromoneGland', image: getImage('33') },
  { id: '19', name: 'yuty', type: 'item', description: 'Pulmon Yutyrannus', price: 50, command: '/sell yuty', image: getImage('19') },

  // Dinos
  { id: '106', name: 'Amarg', type: 'dino', description: 'Amargasaurio', level: 300, price: 38000, command: '/buy amarg', image: getImage('106') },
  { id: '111', name: 'Andrew', type: 'dino', description: 'Andrewsarchus', level: 300, price: 34000, command: '/buy andrew', image: getImage('111') },
  { id: '89', name: 'Basilisk', type: 'dino', description: 'Basilisco', level: '50-300', price: 45000, command: '/buy basilisk', image: getImage('89') },
  { id: '51', name: 'Chrysaora', type: 'dino', description: 'Chrysaora', level: 300, price: 200000, command: '/buy Chrysaora', image: getImage('51') },
  { id: '52', name: 'Dakosaurus', type: 'dino', description: 'Dakosaurus', level: 300, price: 200000, command: '/buy Dakosaurus', image: getImage('52') },
  { id: '98', name: 'Deinonychus', type: 'dino', description: 'Deinonychus', level: 300, price: 39000, command: '/buy deino', image: getImage('98') },
  { id: '114', name: 'Desmo', type: 'dino', description: 'Desmodus', level: 300, price: 36000, command: '/buy desmo', image: getImage('114') },
  { id: '108', name: 'Dinopithecus', type: 'dino', description: 'Dinopithecus', level: 300, price: 36000, command: '/buy dinopithecus', image: getImage('108') },
  { id: '113', name: 'Fjord', type: 'dino', description: 'Fjordhawk (Alcon)', level: '50-300', price: 9000, command: '/buy fjord', image: getImage('113') },
  { id: '91', name: 'Golem', type: 'dino', description: 'Golem roca', level: '50-300', price: 48000, command: '/buy golem', image: getImage('91') },
  { id: '53', name: 'Homarus', type: 'dino', description: 'Homarus', level: 300, price: 200000, command: '/buy Homarus', image: getImage('53') },
  { id: '54', name: 'Istiophorus', type: 'dino', description: 'Istiophorus', level: 300, price: 200000, command: '/buy Istiophorus', image: getImage('54') },
  { id: '90', name: 'Karkinos', type: 'dino', description: 'Karkinos', level: '50-300', price: 42000, command: '/buy karkinos', image: getImage('90') },
  { id: '55', name: 'Kathreptis', type: 'dino', description: 'Kathreptis', level: 300, price: 200000, command: '/buy Kathreptis', image: getImage('55') },
  { id: '86', name: 'Maewing', type: 'dino', description: 'Maewing', level: '20-300', price: 30000, command: '/buy maewing', image: getImage('86') },
  { id: '102', name: 'Magma', type: 'dino', description: 'Magmasaurio', level: 300, price: 42000, command: '/buy magma', image: getImage('102') },
  { id: '56', name: 'Malleocephalus', type: 'dino', description: 'Malleocephalus', level: 300, price: 200000, command: '/buy Malleocephalus', image: getImage('56') },
  { id: '94', name: 'Mana', type: 'dino', description: 'Managarmr', level: 300, price: 44000, command: '/buy mana', image: getImage('94') },
  { id: '57', name: 'MantisShrimp', type: 'dino', description: 'Mantis Shrimp', level: 300, price: 200000, command: '/buy MantisShrimp', image: getImage('57') },
  { id: '58', name: 'Monodon', type: 'dino', description: 'Monodon', level: 300, price: 200000, command: '/buy Monodon', image: getImage('58') },
  { id: '59', name: 'Mudpuppy', type: 'dino', description: 'Mudpuppy', level: 300, price: 200000, command: '/buy Mudpuppy', image: getImage('59') },
  { id: '83', name: 'Noglin', type: 'dino', description: 'Noglin', level: '20-300', price: 85000, command: '/buy noglin', image: getImage('83') },
  { id: '60', name: 'Ocepechelon', type: 'dino', description: 'Ocepechelon', level: 300, price: 200000, command: '/buy Ocepechelon', image: getImage('60') },
  { id: '61', name: 'Onchopristis', type: 'dino', description: 'Onchopristis', level: 300, price: 200000, command: '/buy Onchopristis', image: getImage('61') },
  { id: '92', name: 'Owl', type: 'dino', description: 'Buho', level: 300, price: 36000, command: '/buy owl', image: getImage('92') },
  { id: '62', name: 'Qarmoutus', type: 'dino', description: 'Qarmoutus', level: 300, price: 200000, command: '/buy Qarmoutus', image: getImage('62') },
  { id: '116', name: 'Reaper', type: 'dino', description: 'Reaper', level: '50-300', price: 75000, command: '/buy reaper', image: getImage('116') },
  { id: '73', name: 'rex', type: 'dino', description: 'Rex', level: 300, price: 54000, command: '/buy rex', image: getImage('73') },
  { id: '63', name: 'Riftcrawler', type: 'dino', description: 'Riftcrawler', level: 300, price: 200000, command: '/buy Riftcrawler', image: getImage('63') },
  { id: '64', name: 'Seahorse', type: 'dino', description: 'Seahorse', level: 300, price: 200000, command: '/buy Seahorse', image: getImage('64') },
  { id: '84', name: 'Shadowmane', type: 'dino', description: 'Shadowmane', level: 300, price: 50000, command: '/buy Shadowmane', image: getImage('84') },
  { id: '110', name: 'Sinoma', type: 'dino', description: 'Sinomacrops', level: '50-300', price: 9000, command: '/buy sinoma', image: getImage('110') },
  { id: '100', name: 'Stalker', type: 'dino', description: 'Bloodstalker', level: 300, price: 42000, command: '/buy stalker', image: getImage('100') },
  { id: '76', name: 'stego', type: 'dino', description: 'Stegosaurus', level: 300, price: 38000, command: '/buy stego', image: getImage('76') },
  { id: '75', name: 'Stegosaurus', type: 'dino', description: 'Abyssal Stegosaurio', level: 300, price: 250000, command: '/buy Stegosaurus', image: getImage('75') },
  { id: '65', name: 'Stereolepis', type: 'dino', description: 'Stereolepis', level: 300, price: 200000, command: '/buy Stereolepis', image: getImage('65') },
  { id: '50', name: 'stryder', type: 'dino', description: 'Stryder Farmeo', level: 150, price: 250000, command: '/buy stryder', image: getImage('50') },
  { id: '66', name: 'Takifugu', type: 'dino', description: 'Takifugu', level: 300, price: 200000, command: '/buy Takifugu', image: getImage('66') },
  { id: '79', name: 'theri', type: 'dino', description: 'Therizinosaurus', level: 300, price: 42000, command: '/buy theri', image: getImage('79') },
  { id: '78', name: 'Therizinosaur', type: 'dino', description: 'Abyssal Therizinosaurio', level: 300, price: 250000, command: '/buy Therizinosaur', image: getImage('78') },
  { id: '67', name: 'Thunnus', type: 'dino', description: 'Thunnus', level: 300, price: 200000, command: '/buy Thunnus', image: getImage('67') },
  { id: '68', name: 'Tiktaalik', type: 'dino', description: 'Tiktaalik', level: 300, price: 200000, command: '/buy Tiktaalik', image: getImage('68') },
  { id: '81', name: 'Trike', type: 'dino', description: 'Trike', level: 300, price: 9000, command: '/buy Trike', image: getImage('81') },
  { id: '69', name: 'Tridacna', type: 'dino', description: 'Tridacna', level: 300, price: 200000, command: '/buy Tridacna', image: getImage('69') },
  { id: '104', name: 'Tropeo', type: 'dino', description: 'Tropeognathus', level: 300, price: 40000, command: '/buy tropeo', image: getImage('104') },
  { id: '70', name: 'Tuso', type: 'dino', description: 'Tusoteuthis', level: 300, price: 58000, command: '/buy Tuso', image: getImage('70') },
  { id: '72', name: 'tyrano', type: 'dino', description: 'Abyssal Rex', level: 300, price: 300000, command: '/buy tyrano', image: getImage('72') },
  { id: '96', name: 'Velo', type: 'dino', description: 'Velonasaurio', level: 300, price: 36000, command: '/buy velo', image: getImage('96') },
  { id: '87', name: 'Yutyrannus', type: 'dino', description: 'Abyssal Yutyrannus', level: 300, price: 250000, command: '/buy Yutyrannus', image: getImage('87') },

  // P/Stats Dinos
  { id: '107', name: 'bamarg', type: 'dino', description: '(P/stats) Amargasaurio', level: 1, price: 42000, command: '/buy bamarg', image: getImage('107') },
  { id: '112', name: 'bandrew', type: 'dino', description: '(P/stats) Andrewsarchus', level: 1, price: 36000, command: '/buy bandrew', image: getImage('112') },
  { id: '99', name: 'bdeino', type: 'dino', description: '(P/stats) Deinonychus', level: 1, price: 40000, command: '/buy bdeino', image: getImage('99') },
  { id: '115', name: 'bdesmo', type: 'dino', description: '(P/stats) Desmodus', level: 1, price: 40000, command: '/buy bdesmo', image: getImage('115') },
  { id: '109', name: 'bdinopithecus', type: 'dino', description: '(P/stats) Dinopithecus', level: 1, price: 40000, command: '/buy bdinopithecus', image: getImage('109') },
  { id: '95', name: 'bmana', type: 'dino', description: '(P/stats) Managarmr', level: 1, price: 45000, command: '/buy bmana', image: getImage('95') },
  { id: '103', name: 'bmagma', type: 'dino', description: '(P/stats) Magmasaurio', level: 1, price: 48000, command: '/buy bmagma', image: getImage('103') },
  { id: '93', name: 'bowl', type: 'dino', description: '(P/stats) Buho', level: 1, price: 38000, command: '/buy bowl', image: getImage('93') },
  { id: '74', name: 'brex', type: 'dino', description: '(P/stats) Rex', level: 1, price: 60000, command: '/buy brex', image: getImage('74') },
  { id: '85', name: 'bshadowmane', type: 'dino', description: '(P/stats) Shadowmane', level: 1, price: 56000, command: '/buy bshadowmane', image: getImage('85') },
  { id: '101', name: 'bstalker', type: 'dino', description: '(P/stats) Bloodstalker', level: 1, price: 46000, command: '/buy bstalker', image: getImage('101') },
  { id: '77', name: 'bstego', type: 'dino', description: '(P/stats) Stegosaurus', level: 1, price: 40000, command: '/buy bstego', image: getImage('77') },
  { id: '80', name: 'btheri', type: 'dino', description: '(P/stats) Therizinosaurus', level: 1, price: 48000, command: '/buy btheri', image: getImage('80') },
  { id: '82', name: 'btrike', type: 'dino', description: '(P/stats) Trike', level: 1, price: 5000, command: '/buy btrike', image: getImage('82') },
  { id: '105', name: 'btropeo', type: 'dino', description: '(P/stats) Tropeognathus', level: 1, price: 46000, command: '/buy btropeo', image: getImage('105') },
  { id: '71', name: 'btuso', type: 'dino', description: '(P/stats) Tusoteuthis', level: 1, price: 66000, command: '/buy btuso', image: getImage('71') },
  { id: '97', name: 'bvelo', type: 'dino', description: '(P/stats) Velonosaur', level: 1, price: 40000, command: '/buy bvelo', image: getImage('97') },
  { id: '88', name: 'byuty', type: 'dino', description: '(P/stats) Yutyrannus', level: 1, price: 49000, command: '/buy byuty', image: getImage('88') },
].sort((a, b) => {
  const aIsStats = a.description.includes('(P/stats)');
  const bIsStats = b.description.includes('(P/stats)');

  if (aIsStats && !bIsStats) {
    return 1;
  }
  if (!aIsStats && bIsStats) {
    return -1;
  }
  return a.name.localeCompare(b.name);
});
