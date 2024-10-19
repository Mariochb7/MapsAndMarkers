/// <reference types="@types/google.maps" />;
import { User } from "./User";
import { Company } from "./Company";
import { CustomMap } from "./CustomMap";

const customMap = new CustomMap("map");
const user = new User();
const comp = new Company();

customMap.addMarker(user);
customMap.addMarker(comp);
