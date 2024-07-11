export default {
  userGuide: "User Guide",
  login: "Login",
  signIn: "Sign in",
  mainBtn1: "Schedule",
  mainBtn2: "Statistics",
  timePopupMenu1: "Modify",
  timePopupMenu2: "Delete",
  deletedPopup: {
    title: "Are you sure you want to delete that block?",
    y: "Delete",
    n: "Cancel",
  },
  newSchedule: "New schedule",
  save: "Save",
  timePicker: {
    startTime: "Start Time",
    endTime: "End Time",
  },
  modify: "Modify",
  fileUpload: "File Upload",
  fileDownLoad: "Sample file Downlad",
  fileSubmit: "complete",
  fileNodata: {
    title: "Please Select a File.",
    txt: "Please check if the file name is set to date.",
  },
  fileExplan:
    "* Files can only be files with the *.txt extension created according to the content of the User Guide. Please refer to the sample file.",
  //guide
  guide: {
    title: "타임의 이용방법에 대해 알아보세요.",
    guide1: {
      title:
        "설명에 앞서 오른쪽파일을 다운받으세요. <br /> 해당 파일과 가이드를 통해 이 서비스의 기본적인 동작 방식을 확인할 수 있습니다.",
      text1: "“ Time “ guide sample file",
      text2: "Download",
    },
    guide2: {
      title: "타임은 기본적으로 두가지의 사용방식이 있습니다.",
      text1: "메모장을 이용해 파일업로드로 일정을 등록하는 방식",
      text2: "플랫폼 내 UI를 이용해 일정을 등록하는 방식",
      text3: "(사진)",
      text4: "바로가기",
    },
    guide3: {
      title: "파일업로드로 일정등록하기",
      text1:
        "1개의 파일은 당신의 ‘하루’를 의미하며, 파일명은 날짜(yyyyMMdd.txt)가 되어야 합니다",
      text2:
        "파일 속 내용의 1줄은 당신의 행동을 나타냅니다.<br />행동을 시작한 시간을 입력하는 것으로 시작하며 “ , “ 을 이용해 <br /> 시작시간과 다음에 작성될 행동의 종류를 구분합니다.",
      text3:
        "위 내용은 당신이 오전 5시 20분에 Personal > Meditation을 시작했음을 의미하며 그 다음 등록되는 행동의 시작시간이 앞선 행동의 종료시간으로 인식합니다.",
      text4:
        "행동은 [1Depth,2Depth]방식으로 최대 2Depth까지 입력이 가능하며, 2Depth이후 작성되는 “ , “ 다음에는 Memo로 인식합니다.",
    },
  },
  //login
  loginPage: {
    title: "서비스 이용을 위해 로그인 해주세요.",
    btnTxt: "구글로 로그인",
    explanTxt:
      "<a href='#'>이용약관</a> 및 <a href='#'>개인정보처리 방침</a>에 동의합니다.",
  },
  agree: "약관에 동의 해주세요",
} as const;
