FROM mysql:8.0

# MySQLサーバーの設定ファイルをコピー
COPY my.cnf /etc/mysql/conf.d/my.cnf

# タイムゾーンを設定
ENV TZ=Asia/Tokyo

CMD ["mysqld"]