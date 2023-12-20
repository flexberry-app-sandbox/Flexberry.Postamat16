



CREATE TABLE [Посылка] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Номер] INT  NULL,

	 [Статус] VARCHAR(12)  NULL,

	 [Логистика] UNIQUEIDENTIFIER  NOT NULL,

	 [Пользователь] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Ячейка] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [НомерЯчейки] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Пользователь] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Номер] INT  NULL,

	 [НомерТелефона] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [СлужбаДоставки] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Адрес] VARCHAR(255)  NULL,

	 [Наименвоание] VARCHAR(255)  NULL,

	 [Номер] INT  NULL,

	 [НомерТелефона] INT  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [РегистрПосылки] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Посылка] UNIQUEIDENTIFIER  NOT NULL,

	 [Хранение] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Ключ] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [СгенКлюч] INT  NULL,

	 [Номер] INT  NULL,

	 [НомерТелефона] INT  NULL,

	 [Уведомление] VARCHAR(255)  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Пользователь] UNIQUEIDENTIFIER  NOT NULL,

	 [Посылка] UNIQUEIDENTIFIER  NOT NULL,

	 [Хранение] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Логистика] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Информация] VARCHAR(255)  NULL,

	 [Номер] INT  NULL,

	 [Состояние] VARCHAR(25)  NULL,

	 [СлужбаДоставки] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Хранение] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [ДатаЗавершения] DATETIME  NULL,

	 [ДатаНачала] DATETIME  NULL,

	 [Номер] INT  NULL,

	 [Продления] VARCHAR(255)  NULL,

	 [Ячейка] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [РегистрХран] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Хранение] UNIQUEIDENTIFIER  NOT NULL,

	 [Постамат] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Постамат] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Адрес] VARCHAR(255)  NULL,

	 [Номер] INT  NULL,

	 [Статус] VARCHAR(10)  NULL,

	 [СлужбаДоставки] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [Уведомление] (

	 [primaryKey] UNIQUEIDENTIFIER  NOT NULL,

	 [Уведомление] VARCHAR(255)  NULL,

	 [СгенКлюч] INT  NULL,

	 [ФИО] VARCHAR(255)  NULL,

	 [Номер] INT  NULL,

	 [НомерТелефона] INT  NULL,

	 [Хранение] UNIQUEIDENTIFIER  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMNETLOCKDATA] (

	 [LockKey] VARCHAR(300)  NOT NULL,

	 [UserName] VARCHAR(300)  NOT NULL,

	 [LockDate] DATETIME  NULL,

	 PRIMARY KEY ([LockKey]))


CREATE TABLE [STORMSETTINGS] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Module] varchar(1000)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [User] varchar(255)  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMAdvLimit] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [User] varchar(255)  NULL,

	 [Published] bit  NULL,

	 [Module] varchar(255)  NULL,

	 [Name] varchar(255)  NULL,

	 [Value] text  NULL,

	 [HotKeyData] int  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERSETTING] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMWEBSEARCH] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Name] varchar(255)  NOT NULL,

	 [Order] INT  NOT NULL,

	 [PresentView] varchar(255)  NOT NULL,

	 [DetailedView] varchar(255)  NOT NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERDETAIL] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Caption] varchar(255)  NOT NULL,

	 [DataObjectView] varchar(255)  NOT NULL,

	 [ConnectMasterProp] varchar(255)  NOT NULL,

	 [OwnerConnectProp] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [STORMFILTERLOOKUP] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [DataObjectType] varchar(255)  NOT NULL,

	 [Container] varchar(255)  NULL,

	 [ContainerTag] varchar(255)  NULL,

	 [FieldsToView] varchar(255)  NULL,

	 [FilterSetting_m0] uniqueidentifier  NOT NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [UserSetting] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [AppName] varchar(256)  NULL,

	 [UserName] varchar(512)  NULL,

	 [UserGuid] uniqueidentifier  NULL,

	 [ModuleName] varchar(1024)  NULL,

	 [ModuleGuid] uniqueidentifier  NULL,

	 [SettName] varchar(256)  NULL,

	 [SettGuid] uniqueidentifier  NULL,

	 [SettLastAccessTime] DATETIME  NULL,

	 [StrVal] varchar(256)  NULL,

	 [TxtVal] varchar(max)  NULL,

	 [IntVal] int  NULL,

	 [BoolVal] bit  NULL,

	 [GuidVal] uniqueidentifier  NULL,

	 [DecimalVal] decimal(20,10)  NULL,

	 [DateTimeVal] DATETIME  NULL,

	 PRIMARY KEY ([primaryKey]))


CREATE TABLE [ApplicationLog] (

	 [primaryKey] uniqueidentifier  NOT NULL,

	 [Category] varchar(64)  NULL,

	 [EventId] INT  NULL,

	 [Priority] INT  NULL,

	 [Severity] varchar(32)  NULL,

	 [Title] varchar(256)  NULL,

	 [Timestamp] DATETIME  NULL,

	 [MachineName] varchar(32)  NULL,

	 [AppDomainName] varchar(512)  NULL,

	 [ProcessId] varchar(256)  NULL,

	 [ProcessName] varchar(512)  NULL,

	 [ThreadName] varchar(512)  NULL,

	 [Win32ThreadId] varchar(128)  NULL,

	 [Message] varchar(2500)  NULL,

	 [FormattedMessage] varchar(max)  NULL,

	 PRIMARY KEY ([primaryKey]))




