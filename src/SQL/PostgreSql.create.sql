




CREATE TABLE Посылка (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 Статус VARCHAR(12) NULL,
 Пользователь UUID NOT NULL,
 Логистика UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Ячейка (
 primaryKey UUID NOT NULL,
 НомерЯчейки INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Пользователь (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 ФИО VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE СлужбаДоставки (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 Наименвоание VARCHAR(255) NULL,
 Адрес VARCHAR(255) NULL,
 НомерТелефона INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РегистрПосылки (
 primaryKey UUID NOT NULL,
 Посылка UUID NOT NULL,
 Хранение UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Ключ (
 primaryKey UUID NOT NULL,
 СгенКлюч INT NULL,
 Уведомление VARCHAR(255) NULL,
 ФИО VARCHAR(255) NULL,
 Номер INT NULL,
 НомерТелефона INT NULL,
 Пользователь UUID NOT NULL,
 Посылка UUID NOT NULL,
 Хранение UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Логистика (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 Состояние VARCHAR(25) NULL,
 Информация VARCHAR(255) NULL,
 СлужбаДоставки UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Хранение (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 ДатаНачала TIMESTAMP(3) NULL,
 ДатаЗавершения TIMESTAMP(3) NULL,
 Продления VARCHAR(255) NULL,
 Ячейка UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE РегистрХран (
 primaryKey UUID NOT NULL,
 Хранение UUID NOT NULL,
 Постамат UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Постамат (
 primaryKey UUID NOT NULL,
 Номер INT NULL,
 Адрес VARCHAR(255) NULL,
 Статус VARCHAR(10) NULL,
 СлужбаДоставки UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE Уведомление (
 primaryKey UUID NOT NULL,
 Уведомление VARCHAR(255) NULL,
 СгенКлюч INT NULL,
 ФИО VARCHAR(255) NULL,
 Номер INT NULL,
 НомерТелефона INT NULL,
 Хранение UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMNETLOCKDATA (
 LockKey VARCHAR(300) NOT NULL,
 UserName VARCHAR(300) NOT NULL,
 LockDate TIMESTAMP(3) NULL,
 PRIMARY KEY (LockKey));


CREATE TABLE STORMSETTINGS (
 primaryKey UUID NOT NULL,
 Module VARCHAR(1000) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 "User" VARCHAR(255) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMAdvLimit (
 primaryKey UUID NOT NULL,
 "User" VARCHAR(255) NULL,
 Published BOOLEAN NULL,
 Module VARCHAR(255) NULL,
 Name VARCHAR(255) NULL,
 Value TEXT NULL,
 HotKeyData INT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERSETTING (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMWEBSEARCH (
 primaryKey UUID NOT NULL,
 Name VARCHAR(255) NOT NULL,
 "Order" INT NOT NULL,
 PresentView VARCHAR(255) NOT NULL,
 DetailedView VARCHAR(255) NOT NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERDETAIL (
 primaryKey UUID NOT NULL,
 Caption VARCHAR(255) NOT NULL,
 DataObjectView VARCHAR(255) NOT NULL,
 ConnectMasterProp VARCHAR(255) NOT NULL,
 OwnerConnectProp VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE STORMFILTERLOOKUP (
 primaryKey UUID NOT NULL,
 DataObjectType VARCHAR(255) NOT NULL,
 Container VARCHAR(255) NULL,
 ContainerTag VARCHAR(255) NULL,
 FieldsToView VARCHAR(255) NULL,
 FilterSetting_m0 UUID NOT NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE UserSetting (
 primaryKey UUID NOT NULL,
 AppName VARCHAR(256) NULL,
 UserName VARCHAR(512) NULL,
 UserGuid UUID NULL,
 ModuleName VARCHAR(1024) NULL,
 ModuleGuid UUID NULL,
 SettName VARCHAR(256) NULL,
 SettGuid UUID NULL,
 SettLastAccessTime TIMESTAMP(3) NULL,
 StrVal VARCHAR(256) NULL,
 TxtVal TEXT NULL,
 IntVal INT NULL,
 BoolVal BOOLEAN NULL,
 GuidVal UUID NULL,
 DecimalVal DECIMAL(20,10) NULL,
 DateTimeVal TIMESTAMP(3) NULL,
 PRIMARY KEY (primaryKey));


CREATE TABLE ApplicationLog (
 primaryKey UUID NOT NULL,
 Category VARCHAR(64) NULL,
 EventId INT NULL,
 Priority INT NULL,
 Severity VARCHAR(32) NULL,
 Title VARCHAR(256) NULL,
 Timestamp TIMESTAMP(3) NULL,
 MachineName VARCHAR(32) NULL,
 AppDomainName VARCHAR(512) NULL,
 ProcessId VARCHAR(256) NULL,
 ProcessName VARCHAR(512) NULL,
 ThreadName VARCHAR(512) NULL,
 Win32ThreadId VARCHAR(128) NULL,
 Message VARCHAR(2500) NULL,
 FormattedMessage TEXT NULL,
 PRIMARY KEY (primaryKey));



 ALTER TABLE Посылка ADD CONSTRAINT FK906487ac55db24901179da767c2800cf61b510a0 FOREIGN KEY (Пользователь) REFERENCES Пользователь; 
CREATE INDEX Index906487ac55db24901179da767c2800cf61b510a0 on Посылка (Пользователь); 

 ALTER TABLE Посылка ADD CONSTRAINT FK41083a10e439db754a99a200793d2e87e143c47a FOREIGN KEY (Логистика) REFERENCES Логистика; 
CREATE INDEX Index41083a10e439db754a99a200793d2e87e143c47a on Посылка (Логистика); 

 ALTER TABLE РегистрПосылки ADD CONSTRAINT FK47f85ec9cf03349ba975c466dce357212cdca787 FOREIGN KEY (Посылка) REFERENCES Посылка; 
CREATE INDEX Index47f85ec9cf03349ba975c466dce357212cdca787 on РегистрПосылки (Посылка); 

 ALTER TABLE РегистрПосылки ADD CONSTRAINT FKe7e9d897506df3735d04aee08c085cc697e0d71a FOREIGN KEY (Хранение) REFERENCES Хранение; 
CREATE INDEX Indexe7e9d897506df3735d04aee08c085cc697e0d71a on РегистрПосылки (Хранение); 

 ALTER TABLE Ключ ADD CONSTRAINT FKe95f9eaef65daa4004a9f6e0a00d620650111431 FOREIGN KEY (Пользователь) REFERENCES Пользователь; 
CREATE INDEX Indexe95f9eaef65daa4004a9f6e0a00d620650111431 on Ключ (Пользователь); 

 ALTER TABLE Ключ ADD CONSTRAINT FKd2ed1a62e96e27070b9b1a705bd5c294cc282576 FOREIGN KEY (Посылка) REFERENCES Посылка; 
CREATE INDEX Indexd2ed1a62e96e27070b9b1a705bd5c294cc282576 on Ключ (Посылка); 

 ALTER TABLE Ключ ADD CONSTRAINT FK835545d1c060db09a1882b17810b3119e35a859c FOREIGN KEY (Хранение) REFERENCES Хранение; 
CREATE INDEX Index835545d1c060db09a1882b17810b3119e35a859c on Ключ (Хранение); 

 ALTER TABLE Логистика ADD CONSTRAINT FKc5c04960c86fe49a08a41d58b4c8ff51ab87d446 FOREIGN KEY (СлужбаДоставки) REFERENCES СлужбаДоставки; 
CREATE INDEX Indexc5c04960c86fe49a08a41d58b4c8ff51ab87d446 on Логистика (СлужбаДоставки); 

 ALTER TABLE Хранение ADD CONSTRAINT FK58d19e82ea2518ead0a6bea4993dda87580f0465 FOREIGN KEY (Ячейка) REFERENCES Ячейка; 
CREATE INDEX Index58d19e82ea2518ead0a6bea4993dda87580f0465 on Хранение (Ячейка); 

 ALTER TABLE РегистрХран ADD CONSTRAINT FKe6310d863a746e0c4faa755ca2786c5bcd1119a8 FOREIGN KEY (Хранение) REFERENCES Хранение; 
CREATE INDEX Indexe6310d863a746e0c4faa755ca2786c5bcd1119a8 on РегистрХран (Хранение); 

 ALTER TABLE РегистрХран ADD CONSTRAINT FKa1dd44c7bec478cdd87853f5e343ae774c45567d FOREIGN KEY (Постамат) REFERENCES Постамат; 
CREATE INDEX Indexa1dd44c7bec478cdd87853f5e343ae774c45567d on РегистрХран (Постамат); 

 ALTER TABLE Постамат ADD CONSTRAINT FKba0a3b6be2ab1dd7d247715ca0d2dab8b7d5d6d4 FOREIGN KEY (СлужбаДоставки) REFERENCES СлужбаДоставки; 
CREATE INDEX Indexba0a3b6be2ab1dd7d247715ca0d2dab8b7d5d6d4 on Постамат (СлужбаДоставки); 

 ALTER TABLE Уведомление ADD CONSTRAINT FKe3aed92e1a361c9ab7c1703d8eaf300c25e7e865 FOREIGN KEY (Хранение) REFERENCES Хранение; 
CREATE INDEX Indexe3aed92e1a361c9ab7c1703d8eaf300c25e7e865 on Уведомление (Хранение); 

 ALTER TABLE STORMWEBSEARCH ADD CONSTRAINT FKc4378e39870eb056aec84088683297a01d2a6200 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERDETAIL ADD CONSTRAINT FK921d16269835017e2a0d0e29ad6fb175454a70d0 FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

 ALTER TABLE STORMFILTERLOOKUP ADD CONSTRAINT FKce38ef0db3f01a53acaa49fed8853fb941ad47ba FOREIGN KEY (FilterSetting_m0) REFERENCES STORMFILTERSETTING; 

