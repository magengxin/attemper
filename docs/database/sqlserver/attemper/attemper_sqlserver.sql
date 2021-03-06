CREATE TABLE ATTEMPER_ARG (
  ARG_NAME NVARCHAR(64) NOT NULL,
  ARG_TYPE TINYINT NOT NULL,
  ARG_VALUE NVARCHAR(2000),
  GENERIC_TYPE TINYINT,
  ATTRIBUTE NVARCHAR(2000),
  REMARK NVARCHAR(255)  ,
  TENANT_ID NVARCHAR(64)  NOT NULL,
  PRIMARY KEY (ARG_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_CALENDAR (
  CALENDAR_NAME NVARCHAR(64)  NOT NULL,
  DISPLAY_NAME NVARCHAR(255)  ,
  PRIMARY KEY (CALENDAR_NAME)
) ;

CREATE TABLE ATTEMPER_CALENDAR_DAY (
  CALENDAR_NAME NVARCHAR(64)  NOT NULL,
  DAY_NUM INT NOT NULL,
  REMARK NVARCHAR(255),
  PRIMARY KEY (CALENDAR_NAME,DAY_NUM)
) ;

CREATE TABLE ATTEMPER_CONDITION (
  CONDITION_NAME NVARCHAR(64)  NOT NULL,
  CONDITION_TYPE TINYINT NOT NULL,
  CONTENT NVARCHAR(2000)  NOT NULL,
  TENANT_ID NVARCHAR(64)  NOT NULL,
  PRIMARY KEY (CONDITION_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_DATASOURCE (
  DB_NAME NVARCHAR(64) NOT NULL,
  DRIVER_CLASS_NAME NVARCHAR(64) NOT NULL,
  JDBC_URL NVARCHAR(255) NOT NULL,
  USER_NAME NVARCHAR(255),
  PASSWORD NVARCHAR(255),
  ATTRIBUTE NVARCHAR(255),
  TENANT_ID NVARCHAR(64) NOT NULL,
  PRIMARY KEY (DB_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_DELAY_JOB (
  ID NVARCHAR(64) NOT NULL,
  JOB_NAME NVARCHAR(64) NOT NULL,
  STATUS TINYINT,
  REQUEST_TIME BIGINT,
  TENANT_ID NVARCHAR(255) NOT NULL,
  PRIMARY KEY (ID)
);

CREATE TABLE ATTEMPER_EXECUTION (
  ID NVARCHAR(64)  NOT NULL,
  PROC_INST_ID NVARCHAR(64)  ,
  ROOT_PROC_INST_ID NVARCHAR(64)  ,
  SUPER_PROC_INST_ID NVARCHAR(64)  ,
  JOB_NAME NVARCHAR(64)  ,
  TRIGGER_NAME NVARCHAR(64)  ,
  PROC_DEF_ID NVARCHAR(64)  ,
  START_TIME BIGINT,
  END_TIME BIGINT,
  DURATION BIGINT ,
  STATUS TINYINT,
  CODE SMALLINT,
  MSG TEXT,
  PARENT_ID NVARCHAR(64)  ,
  SCHEDULER_URI NVARCHAR(255)  ,
  EXECUTOR_URI NVARCHAR(255)  ,
  TENANT_ID NVARCHAR(64)  ,
  PRIMARY KEY (ID),
  UNIQUE (PROC_INST_ID)
) ;

create index IDX_EXECUTION_JOB_NAME on ATTEMPER_EXECUTION(JOB_NAME);
create index IDX_EXECUTION_TENANT_ID on ATTEMPER_EXECUTION(TENANT_ID);

CREATE TABLE ATTEMPER_GIST (
  GIST_NAME NVARCHAR(64)  NOT NULL,
  CREATE_TIME BIGINT NOT NULL,
  TENANT_ID NVARCHAR(64)  NOT NULL,
  PRIMARY KEY (GIST_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_GIST_INFO (
  ID NVARCHAR(64) NOT NULL,
  GIST_NAME NVARCHAR(64) NOT NULL,
  VERSION NVARCHAR(64) NOT NULL,
  CONTENT TEXT ,
  UPDATE_TIME BIGINT NOT NULL,
  TENANT_ID NVARCHAR(64) NOT NULL,
  PRIMARY KEY (ID)
) ;

CREATE TABLE ATTEMPER_INSTANCE (
  ID NVARCHAR(64)  NOT NULL,
  PROC_INST_ID NVARCHAR(64)  ,
  ROOT_PROC_INST_ID NVARCHAR(64)  ,
  SUPER_PROC_INST_ID NVARCHAR(64)  ,
  JOB_NAME NVARCHAR(64),
  TRIGGER_NAME NVARCHAR(64),
  PROC_DEF_ID NVARCHAR(64),
  START_TIME BIGINT,
  END_TIME BIGINT,
  DURATION BIGINT,
  STATUS TINYINT,
  CODE SMALLINT,
  MSG TEXT ,
  PARENT_ID NVARCHAR(64)  ,
  SCHEDULER_URI NVARCHAR(255)  ,
  EXECUTOR_URI NVARCHAR(255)  ,
  TENANT_ID NVARCHAR(64),
  PRIMARY KEY (ID),
  UNIQUE (PROC_INST_ID)
) ;

create index IDX_INSTANCE_JOB_NAME on ATTEMPER_INSTANCE(JOB_NAME);
create index IDX_INSTANCE_TENANT_ID on ATTEMPER_INSTANCE(TENANT_ID);

CREATE TABLE ATTEMPER_INSTANCE_ACT (
  ID NVARCHAR(64) NOT NULL,
  ACT_INST_ID NVARCHAR(64),
  PARENT_ACT_INST_ID NVARCHAR(64),
  PROC_INST_ID NVARCHAR(64),
  ROOT_PROC_INST_ID NVARCHAR(64),
  ACT_ID NVARCHAR(255),
  ACT_NAME NVARCHAR(255),
  ACT_TYPE NVARCHAR(255),
  START_TIME BIGINT,
  END_TIME BIGINT,
  DURATION BIGINT,
  STATUS TINYINT,
  LOG_KEY NVARCHAR(255),
  LOG_TEXT TEXT,
  BIZ_URI NVARCHAR(255),
  PRIMARY KEY (ID)
) ;

create index IDX_INSTANCE_ACT_PROC_INST_ID on ATTEMPER_INSTANCE_ACT(PROC_INST_ID);

CREATE TABLE ATTEMPER_JOB (
  JOB_NAME NVARCHAR(64)  NOT NULL,
  DISPLAY_NAME NVARCHAR(255)  ,
  CONTENT TEXT ,
  STATUS TINYINT,
  CONCURRENT TINYINT,
  ONCE TINYINT,
  UPDATE_TIME BIGINT,
  REMARK NVARCHAR(255),
  TENANT_ID NVARCHAR(64)  NOT NULL,
  PRIMARY KEY (JOB_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_JOB_ARG (
  JOB_NAME NVARCHAR(64)  NOT NULL,
  ARG_NAME NVARCHAR(64)  NOT NULL,
  TENANT_ID NVARCHAR(64)  NOT NULL,
  PRIMARY KEY (JOB_NAME,ARG_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_JOB_CONDITION (
  JOB_NAME NVARCHAR(64)  NOT NULL,
  CONDITION_NAME NVARCHAR(64)  NOT NULL,
  TENANT_ID NVARCHAR(64)  NOT NULL,
  PRIMARY KEY (JOB_NAME,CONDITION_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_JOB_PROJECT (
  JOB_NAME NVARCHAR(64)  NOT NULL,
  PROJECT_NAME NVARCHAR(64)  ,
  TENANT_ID NVARCHAR(64)  NOT NULL,
  PRIMARY KEY (JOB_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_JOB_TRIGGER (
  TRIGGER_NAME NVARCHAR(64)  NOT NULL,
  JOB_NAME NVARCHAR(64)  NOT NULL,
  TENANT_ID NVARCHAR(64)  NOT NULL,
  PRIMARY KEY (TRIGGER_NAME,JOB_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_PROJECT (
  PROJECT_NAME NVARCHAR(64)  NOT NULL,
  PARENT_PROJECT_NAME NVARCHAR(64)  ,
  DISPLAY_NAME NVARCHAR(255)  ,
  CONTEXT_PATH NVARCHAR(255)  ,
  BIND_EXECUTOR TINYINT,
  TENANT_ID NVARCHAR(64)  NOT NULL,
  PRIMARY KEY (PROJECT_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_PROJECT_EXECUTOR (
  PROJECT_NAME NVARCHAR(64) NOT NULL,
  EXECUTOR_URI NVARCHAR(255) ,
  TENANT_ID NVARCHAR(64) NOT NULL,
  PRIMARY KEY (PROJECT_NAME,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_PROJECT_INFO (
  PROJECT_NAME NVARCHAR(64)  NOT NULL,
  URI NVARCHAR(255) NOT NULL,
  URI_TYPE TINYINT,
  TENANT_ID NVARCHAR(64)  NOT NULL,
  PRIMARY KEY (PROJECT_NAME,URI,TENANT_ID)
) ;

CREATE TABLE ATTEMPER_ROLE (
  ROLE_NAME NVARCHAR(64)  NOT NULL,
  DISPLAY_NAME NVARCHAR(255)  ,
  REMARK NVARCHAR(255)  ,
  PRIMARY KEY (ROLE_NAME)
) ;

CREATE TABLE ATTEMPER_ROLE_RESOURCE (
  ROLE_NAME NVARCHAR(64) NOT NULL,
  RESOURCE_NAME NVARCHAR(64) NOT NULL,
  PRIMARY KEY (ROLE_NAME,RESOURCE_NAME)
) ;

CREATE TABLE ATTEMPER_ROLE_TENANT (
  ROLE_NAME NVARCHAR(64) NOT NULL,
  USER_NAME NVARCHAR(64) NOT NULL,
  PRIMARY KEY (ROLE_NAME,USER_NAME)
) ;

CREATE TABLE ATTEMPER_TENANT (
  USER_NAME NVARCHAR(64)  NOT NULL,
  DISPLAY_NAME NVARCHAR(255)  NOT NULL,
  PASSWORD NVARCHAR(255)  NOT NULL,
  EMAIL NVARCHAR(255)  ,
  MOBILE NVARCHAR(255)  ,
  STATUS TINYINT NOT NULL,
  SUPER_ADMIN TINYINT,
  SEND_CONFIG NVARCHAR(64)  ,
  PRIMARY KEY (USER_NAME)
) ;

