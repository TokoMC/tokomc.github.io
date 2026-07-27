export function canChangeRank(
  admin,
  targetUser
) {

  // Main Owner همه کار می‌تواند بکند

  if(admin.rank === "MAIN_OWNER") {
    return true;
  }


  // Owner نمی‌تواند Main Owner را تغییر دهد

  if(
    admin.rank === "OWNER" &&
    targetUser.rank !== "MAIN_OWNER"
  ){
    return true;
  }


  return false;

}
