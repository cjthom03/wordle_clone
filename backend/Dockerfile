FROM ruby:3.1.1-alpine

RUN apk add --update --no-cache \
      #binutils-gold \
      #build-base \
      #curl \
      #file \
      #g++ \
      gcc \
      #git \
      #less \
      #libstdc++ \
      #libffi-dev \
      libc-dev \
      #linux-headers \
      #libxml2-dev \
      #libxslt-dev \
      libgcrypt-dev \
      make \
      #netcat-openbsd \
      #nodejs \
      #openssl \
      #pkgconfig \
      sqlite \
      sqlite-dev \
      tzdata
      #yarn

# Temporary packages:
# sqlite, sqlite-dev -> remove id another DB is added to replace sqlite3


ENV BUNDLER_VERSION=2.3.7
RUN gem install bundler -v $BUNDLER_VERSION


WORKDIR /usr/src/app

COPY Gemfile Gemfile.lock ./

RUN bundle config build.nokogiri --use-system-libraries
RUN bundle install

COPY . .

CMD ["rails", "server", "-b", "0.0.0.0"]
