import React, { Component } from "react";
// Photos of Guns
import EVA from "../../../static/images/weapons/EVA-8_Auto_Icon.png";
import Reapeater from "../../../static/images/weapons/30-30_Repeater_Icon.png";
import Alternator from "../../../static/images/weapons/Alternator_SMG_Icon.png";
import Bocek from "../../../static/images/weapons/Bocek_Compound_Bow_Icon.png";
import CAR from "../../../static/images/weapons/C.A.R._SMG_Icon.png";
import Charge from "../../../static/images/weapons/Charge_Rifle_Icon.png";
import Devotion from "../../../static/images/weapons/Devotion_LMG_Icon.png";
import Scout from "../../../static/images/weapons/G7_Scout_Icon.png";
import Havoc from "../../../static/images/weapons/HAVOC_Rifle_Icon.png";
import Hemlock from "../../../static/images/weapons/Hemlok_Burst_AR_Icon.png";
import Kraber from "../../../static/images/weapons/Kraber_.50-Cal_Sniper_Icon.png";
import Lstar from "../../../static/images/weapons/L-STAR_EMG_Icon.png";
import Longbow from "../../../static/images/weapons/Longbow_DMR_Icon.png";
import Spitfire from "../../../static/images/weapons/M600_Spitfire_Icon.png";
import Mastiff from "../../../static/images/weapons/Mastiff_Shotgun_Icon.png";
import Mozam from "../../../static/images/weapons/Mozambique_Shotgun_Icon.png";
import P2020 from "../../../static/images/weapons/P2020_Icon.png";
import Peacekeeper from "../../../static/images/weapons/Peacekeeper_Icon.png";
import Prowler from "../../../static/images/weapons/Prowler_Burst_PDW_Icon.png";
import R99 from "../../../static/images/weapons/R-99_SMG_Icon.png";
import R301 from "../../../static/images/weapons/R-301_Carbine_Icon.png";
import Rampage from "../../../static/images/weapons/Rampage_LMG_Icon.png";
import RE45 from "../../../static/images/weapons/Re-45_Auto_Icon.png";
import Sentinel from "../../../static/images/weapons/Sentinel_Icon.png";
import TripleTake from "../../../static/images/weapons/Triple_Take_Icon.png";
import Flatline from "../../../static/images/weapons/VK-47_Flatline_Icon.png";
import Volt from "../../../static/images/weapons/Volt_SMG_Icon.png";
import Wingman from "../../../static/images/weapons/Wingman_Icon.png";
// Ammo Icons
import Arrows from "../../../static/images/ammo-types/arrows.png";
import Energy from "../../../static/images/ammo-types/Energy_Ammo.png";
import Heavy from "../../../static/images/ammo-types/Heavy_Rounds.png";
import Light from "../../../static/images/ammo-types/Light_Rounds.png";
import Mythic_heavy from "../../../static/images/ammo-types/Mythic_Heavy_Rounds.png";
import Mythic_sniper from "../../../static/images/ammo-types/Mythic_Sniper_Ammo.png";
import Shotgun from "../../../static/images/ammo-types/Shotgun_Shells.png";
import Sniper from "../../../static/images/ammo-types/Sniper_Ammo.png";
import Mythic_Shotgun from "../../../static/images/ammo-types/Mythic_Shotgun_Shells.png";
import Mythic_Energy from "../../../static/images/ammo-types/Mythic_Energy_Ammo.png";
// Attachement Icons
import BarrelStab from "../../../static/images/attachments/Barrel_Stabilizer.png";
import Boosted from "../../../static/images/attachments/Boosted_Loader.png";
import ExtEnergy from "../../../static/images/attachments/Extended_Energy_Mag.png";
import ExtHeavy from "../../../static/images/attachments/Extended_Heavy_Mag.png";
import ExtLight from "../../../static/images/attachments/Extended_Light_Mag.png";
import ExtSniper from "../../../static/images/attachments/Extended_Sniper_Mag.png";
import HopUp from "../../../static/images/attachments/Hop_Up_Slot.png";
import Kinetic from "../../../static/images/attachments/Kinetic_Feeder.png";
import Laser from "../../../static/images/attachments/Laser_Sight.png";
import Optics from "../../../static/images/attachments/Optics_Slot.png";
import ShotgunBolt from "../../../static/images/attachments/Shotgun_Bolt.png";
import SkullPiercer from "../../../static/images/attachments/Skullpiercer_Rifling.png";
import SniperStock from "../../../static/images/attachments/Sniper_Stock.png";
import Splatter from "../../../static/images/attachments/Splatter_Rounds.png";
import StdStock from "../../../static/images/attachments/Standard_Stock.png";
import Turbo from "../../../static/images/attachments/Turbocharger.png";
import SelectFire from "../../../static/images/attachments/Selectfire_Receiver.png";
import DoubleTap from "../../../static/images/attachments/Double_tap_trigger.png";
import HammerPoint from "../../../static/images/attachments/Hammerpoint_rounds.png";
// Grenade Icons
import ArcStar from "../../../static/images/grenades/Arc_Star.png";
import Frag from "../../../static/images/grenades/Frag_Grenade.png";
import Thermite from "../../../static/images/grenades/Thermite_Grenade.png";
// Logo Photo
import Logo from "../../../static/images/apex-legends-logo-main.png";

export default class Weapons extends Component {
  render() {
    return (
      <div className="weapons-page-container">
        <div className="item-key">
          <div className="item-key-heading">
            <div className="logo">
              <img src={Logo} />
            </div>
            <div className="heading"></div>
          </div>
          <div className="item-key-keys">
            <div className="item-key-ammo">
              <div className="item-key-ammo-container">
                <div className="item-key-ammo-type">
                  <h3>HEAVY</h3>
                  <img src={Heavy}></img>
                </div>
                <div className="item-key-ammo-type">
                  <h3>LIGHT</h3>
                  <img src={Light}></img>
                </div>
                <div className="item-key-ammo-type">
                  <h3>SNIPER</h3>
                  <img src={Sniper}></img>
                </div>
                <div className="item-key-ammo-type">
                  <h3>SHOTGUN</h3>
                  <img src={Shotgun}></img>
                </div>
                <div className="item-key-ammo-type">
                  <h3>ENERGY</h3>
                  <img src={Energy}></img>
                </div>
                <div className="item-key-ammo-type">
                  <h3>MYTHIC HEAVY</h3>
                  <img src={Mythic_heavy}></img>
                </div>
                <div className="item-key-ammo-type">
                  <h3>MYTHIC SHOTGUN</h3>
                  <img src={Mythic_Shotgun}></img>
                </div>
                <div className="item-key-ammo-type">
                  <h3>MYTHIC SNIPER</h3>
                  <img src={Mythic_sniper}></img>
                </div>
              </div>
            </div>
            <div className="item-key-attachments">
              <div className="item-key-attachments-heading">
                {/* <h2>ATTACHMENT KEY</h2> */}
              </div>
              <div className="item-key-attachments-content">
                <div className="item-key-attachments-type">
                  <h3>EXTENDED LIGHT Magazine</h3>
                  <img src={ExtLight}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>EXTENDED HEAVY MAGAZINE</h3>
                  <img src={ExtHeavy}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>EXTENED ENERGY MAGAZINE</h3>
                  <img src={ExtEnergy}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>EXTENDED SNIPER MAGAZINE</h3>
                  <img src={ExtSniper}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>BARREL STABILIZER</h3>
                  <img src={BarrelStab}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>BOOSTED LOADER</h3>
                  <img src={Boosted}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>DOUBLE TAP TRIGGER</h3>
                  <img src={DoubleTap}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>HAMMERPOINT ROUNDS</h3>
                  <img src={HammerPoint}></img>
                </div>

                <div className="item-key-attachments-type">
                  <h3>HOP UP SLOT</h3>
                  <img src={HopUp}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>KINETIC FEEDER</h3>
                  <img src={Kinetic}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>LASER SIGHT</h3>
                  <img src={Laser}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>OPTICS SLOT</h3>
                  <img src={Optics}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>SELECTFIRE RECEIVER</h3>
                  <img src={SelectFire}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>SHOTGUN BOLT</h3>
                  <img src={ShotgunBolt}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>SKULLPIERCER ROUNDS</h3>
                  <img src={SkullPiercer}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>SNIPER STOCK</h3>
                  <img src={SniperStock}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>SPLATTER ROUNDS</h3>
                  <img src={Splatter}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>STANDARD STOCK</h3>
                  <img src={StdStock}></img>
                </div>
                <div className="item-key-attachments-type">
                  <h3>TURBOCHARGER</h3>
                  <img src={Turbo}></img>
                </div>
              </div>
            </div>
            <div className="item-key-grenades">
              <div className="item-key-grenades-heading"></div>
              <div className="item-key-grenades-type">
                <h3>ARC STAR</h3>
                <img src={ArcStar}></img>
              </div>
              <div className="item-key-grenades-type">
                <h3>FRAG GRENADE</h3>
                <img src={Frag}></img>
              </div>
              <div className="item-key-grenades-type">
                <h3>THERMITE GRENADE</h3>
                <img src={Thermite}></img>
              </div>
            </div>
          </div>
        </div>
        <div className="weapons-container">
          <div className="heading">
            <h1>Welcome to the Apex Armory</h1>
          </div>
          <div className="weapons-class">
            <div className="weapons-ars">
              <h2>Assault Rifles</h2>
              <div className="weapons">
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>HAVOC Rifle</p>
                    <img src={Havoc}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Energy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtEnergy}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                    <img src={Turbo}></img>
                  </div>
                </div>

                <div className="weapon">
                  <div className="weapon-picture">
                    <p>VK-47 Flatline</p>
                    <img src={Flatline}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Heavy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtHeavy}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Hemlock Burst AR</p>
                    <img src={Hemlock}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Heavy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtHeavy}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                    <img src={BarrelStab}></img>
                    <img src={Boosted}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>R-301 Carbine</p>
                    <img src={R301}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Light}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtLight}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                    <img src={BarrelStab}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapons-smgs">
              <h2>Sub Machine Guns</h2>
              <div className="weapons">
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Alternator SMG</p>
                    <img src={Alternator}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Light}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtLight}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                    <img src={Laser}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Prowler Burst PDW</p>
                    <img src={Prowler}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Heavy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtHeavy}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                    <img src={Laser}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>R-99 SMG</p>
                    <img src={R99}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Light}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtLight}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                    <img src={Laser}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Volt SMG</p>
                    <img src={Volt}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Energy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtEnergy}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                    <img src={Laser}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>C.A.R. SMG</p>
                    <img src={CAR}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Light}></img>
                    <img src={Heavy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtLight}></img>
                    <img src={ExtHeavy}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                    <img src={Laser}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapons-lmgs">
              <h2>Light Machine Guns</h2>
              <div className="weapons">
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Devotion LMG</p>
                    <img src={Devotion}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Energy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtEnergy}></img>
                    <img src={BarrelStab}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                    <img src={Turbo}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>L-STAR EMG</p>
                    <img src={Lstar}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Energy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtEnergy}></img>
                    <img src={BarrelStab}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>M600 Spitfire</p>
                    <img src={Spitfire}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Light}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtLight}></img>
                    <img src={Optics}></img>
                    <img src={StdStock}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Rampage LMG</p>
                    <img src={Rampage}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Mythic_heavy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={Optics}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapons-marksman">
              <h2>Marksman Rifles</h2>
              <div className="weapons">
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>G7 Scout</p>
                    <img src={Scout}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Light}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtLight}></img>
                    <img src={BarrelStab}></img>
                    <img src={Optics}></img>
                    <img src={SniperStock}></img>
                    <img src={DoubleTap}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Triple Take</p>
                    <img src={TripleTake}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Energy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtEnergy}></img>
                    <img src={SniperStock}></img>
                    <img src={Optics}></img>
                    <img src={Kinetic}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>30-30 Repeater</p>
                    <img src={Reapeater}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Heavy}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtHeavy}></img>
                    <img src={SniperStock}></img>
                    <img src={Optics}></img>
                    <img src={SkullPiercer}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Bocek Compound Bow</p>
                    <img src={Bocek}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Arrows}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={Optics}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapons-snipers">
              <h2>Sniper Rifles</h2>
              <div className="weapons">
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Charge Rifle</p>
                    <img src={Charge}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Sniper}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={Optics}></img>
                    <img src={SniperStock}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Longbow DMR</p>
                    <img src={Longbow}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Sniper}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtSniper}></img>
                    <img src={BarrelStab}></img>
                    <img src={Optics}></img>
                    <img src={SniperStock}></img>
                    <img src={SkullPiercer}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Kraber .50-CAL Sniper</p>
                    <img src={Kraber}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Mythic_sniper}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Sentinel</p>
                    <img src={Sentinel}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Sniper}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtSniper}></img>
                    <img src={Optics}></img>
                    <img src={SniperStock}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapons-shotguns">
              <h2>Shotguns</h2>
              <div className="weapons">
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>EVA-8 Auto</p>
                    <img src={EVA}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Shotgun}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ShotgunBolt}></img>
                    <img src={Optics}></img>
                    <img src={DoubleTap}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Mastiff Shotgun</p>
                    <img src={Mastiff}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Mythic_Shotgun}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={Optics}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Mozambique</p>
                    <img src={Mozam}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Shotgun}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ShotgunBolt}></img>
                    <img src={HammerPoint}></img>
                    <img src={Optics}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Peacekeeper</p>
                    <img src={Peacekeeper}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Shotgun}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ShotgunBolt}></img>
                    <img src={Kinetic}></img>
                    <img src={Optics}></img>
                  </div>
                </div>
              </div>
            </div>
            <div className="weapons-pistols">
              <h2>Pistols</h2>
              <div className="weapons">
                <div className="weapon">
                  <div className="Weapon_picture">
                    <p>RE-45 Auto</p>
                    <img src={RE45}></img>
                  </div>
                  <div className="ammo_type">
                    <p>Ammo Type</p>
                    <img src={Light}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtLight}></img>
                    <img src={Laser}></img>
                    <img src={Optics}></img>
                    <img src={HammerPoint}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>P2020</p>
                    <img src={P2020}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Light}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtLight}></img>
                    <img src={Laser}></img>
                    <img src={Optics}></img>
                    <img src={HammerPoint}></img>
                  </div>
                </div>
                <div className="weapon">
                  <div className="weapon-picture">
                    <p>Wingman</p>
                    <img src={Wingman}></img>
                  </div>
                  <div className="ammo-type">
                    <p>Ammo Type</p>
                    <img src={Sniper}></img>
                  </div>
                  <div className="attachments">
                    <p>Attachements</p>
                    <img src={ExtSniper}></img>
                    <img src={Laser}></img>
                    <img src={Optics}></img>
                    <img src={Boosted}></img>
                    <img src={SkullPiercer}></img>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
