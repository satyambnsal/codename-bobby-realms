import colors from "colors";
import { deployBlobert, deployDescriptorCustom, deployDescriptorRegular, deploySeeder } from "./libs/contract.js";
import { merkle } from "starknet";

const main = async () => {
  console.log(`   ____          _         `.red);
  console.log(`  |    \\ ___ ___| |___ _ _ `.red);
  console.log(`  |  |  | -_| . | | . | | |`.red);
  console.log(`  |____/|___|  _|_|___|_  |`.red);
  console.log(`            |_|       |___|`.red);

  let seeder = 0x88831d7574861084cf68eb017a9465c416082481cb3457af0e7eb8960b53ccn;
  let descriptor_regular = 0x1c45419d101b0a0e5ac333d5c7823d8c2fd7d2fa66982c5814194a13d049eacn;
  let descriptor_custom = 0x19524960405f69c76cf80f5d9cbfae56fd2c0920b7060f0c59f4d46a7f596fbn;

  await deployBlobert(seeder, descriptor_regular, descriptor_custom);
}


main();